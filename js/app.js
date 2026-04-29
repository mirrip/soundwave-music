/**
 * SoundWave Music - Cloud Version
 * With shared database for all users
 */

// Firebase config - замени на свои данные
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// State
let state = {
    currentTrack: null,
    isPlaying: false,
    queue: [],
    queueIndex: 0,
    shuffle: false,
    repeat: 'off',
    volume: 70,
    isMuted: false,
    progress: 0,
    duration: 0,
    favorites: [],
    playlists: [],
    uploadedTracks: [],
    sharedTracks: [],
    isFirebaseReady: false
};

const elements = {};

// ================================
// INIT
// ================================

function init() {
    cacheElements();
    loadFromStorage();
    bindEvents();
    setupAudio();
    updateVolumeUI();
    createVisualizer();
    renderTracks();
    console.log('🎵 SoundWave ready - upload your music!');
}

function cacheElements() {
    elements.audioPlayer = document.getElementById('audioPlayer');
    elements.uploadedList = document.getElementById('uploadedList');
    elements.favoritesList = document.getElementById('favoritesList');
    elements.dropZone = document.getElementById('dropZone');
    elements.fileInput = document.getElementById('fileInput');
    elements.currentTitle = document.getElementById('currentTitle');
    elements.currentArtist = document.getElementById('currentArtist');
    elements.playBtn = document.getElementById('playBtn');
    elements.prevBtn = document.getElementById('prevBtn');
    elements.nextBtn = document.getElementById('nextBtn');
    elements.shuffleBtn = document.getElementById('shuffleBtn');
    elements.repeatBtn = document.getElementById('repeatBtn');
    elements.repeatMode = document.getElementById('repeatMode');
    elements.progressBar = document.getElementById('progressBar');
    elements.progressFill = document.getElementById('progressFill');
    elements.currentTime = document.getElementById('currentTime');
    elements.totalTime = document.getElementById('totalTime');
    elements.volumeBar = document.getElementById('volumeBar');
    elements.volumeFill = document.getElementById('volumeFill');
    elements.muteBtn = document.getElementById('muteBtn');
    elements.favBtn = document.getElementById('favBtn');
    elements.playerTrackCover = document.querySelector('.player__track-cover');
}

function setupAudio() {
    elements.audioPlayer.volume = state.volume / 100;
    
    elements.audioPlayer.addEventListener('timeupdate', () => {
        state.progress = elements.audioPlayer.currentTime;
        updateProgressUI();
    });
    
    elements.audioPlayer.addEventListener('loadedmetadata', () => {
        state.duration = elements.audioPlayer.duration;
        elements.totalTime.textContent = formatTime(state.duration);
    });
    
    elements.audioPlayer.addEventListener('ended', handleTrackEnd);
    elements.audioPlayer.addEventListener('play', () => { state.isPlaying = true; updatePlayButton(); });
    elements.audioPlayer.addEventListener('pause', () => { state.isPlaying = false; updatePlayButton(); });
}

// ================================
// UPLOAD
// ================================

function handleFileUpload(files) {
    Array.from(files).forEach((file, idx) => {
        if (!file.type.startsWith('audio/')) return;
        
        const track = {
            id: Date.now() + idx,
            title: file.name.replace(/\.[^/.]+$/, ''),
            artist: 'Неизвестный исполнитель',
            album: 'Моя музыка',
            duration: 0,
            cover: `https://picsum.photos/seed/${Date.now() + idx}/200/200`,
            genre: 'Custom',
            bpm: 0,
            audioUrl: URL.createObjectURL(file),
            color: '#fc0',
            isLocal: true
        };
        
        // Get duration
        const audio = new Audio();
        audio.src = track.audioUrl;
        audio.addEventListener('loadedmetadata', () => {
            track.duration = Math.floor(audio.duration);
            addTrack(track);
        });
        audio.load();
    });
}

function addTrack(track) {
    state.uploadedTracks.push(track);
    saveToStorage();
    renderTracks();
}

// ================================
// PLAYBACK
// ================================

function playTrack(track) {
    if (!track) return;
    
    state.currentTrack = track;
    state.progress = 0;
    
    if (track.cover && elements.playerTrackCover) {
        elements.playerTrackCover.src = track.cover;
    }
    
    renderCurrentTrack();
    
    if (track.audioUrl) {
        elements.audioPlayer.src = track.audioUrl;
        elements.audioPlayer.play().catch(e => console.error('Play error:', e));
    }
    
    state.isPlaying = true;
    updatePlayButton();
    highlightCurrentTrack();
    updateFavButton();
}

function togglePlay() {
    if (!state.currentTrack) {
        if (state.uploadedTracks.length > 0) {
            playTrack(state.uploadedTracks[0]);
            state.queue = [...state.uploadedTracks];
        }
        return;
    }
    
    if (state.isPlaying) {
        elements.audioPlayer.pause();
    } else {
        elements.audioPlayer.play().catch(e => console.error('Play error:', e));
    }
    state.isPlaying = !state.isPlaying;
    updatePlayButton();
}

function nextTrack() {
    if (state.queue.length === 0) return;
    
    if (state.shuffle) {
        state.queueIndex = Math.floor(Math.random() * state.queue.length);
    } else {
        state.queueIndex = (state.queueIndex + 1) % state.queue.length;
    }
    
    playTrack(state.queue[state.queueIndex]);
}

function prevTrack() {
    if (state.progress > 3) {
        state.progress = 0;
        elements.audioPlayer.currentTime = 0;
        updateProgressUI();
        return;
    }
    
    if (state.queue.length === 0) return;
    
    state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
    playTrack(state.queue[state.queueIndex]);
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
}

function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    state.repeat = modes[(modes.indexOf(state.repeat) + 1) % modes.length];
    elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
    elements.repeatMode.textContent = state.repeat === 'one' ? '1' : '';
}

function handleTrackEnd() {
    if (state.repeat === 'one') {
        elements.audioPlayer.currentTime = 0;
        elements.audioPlayer.play();
    } else if (state.queueIndex < state.queue.length - 1) {
        nextTrack();
    } else if (state.repeat === 'all') {
        state.queueIndex = 0;
        playTrack(state.queue[0]);
    } else {
        state.isPlaying = false;
        updatePlayButton();
    }
}

// ================================
// FAVORITES
// ================================

function toggleFavorite(track) {
    if (!track) return;
    
    const idx = state.favorites.findIndex(t => t.id === track.id);
    if (idx === -1) {
        state.favorites.push(track);
    } else {
        state.favorites.splice(idx, 1);
    }
    
    updateFavButton();
    renderTracks();
    saveToStorage();
}

function isFavorite(track) {
    return state.favorites.some(t => t.id === track.id);
}

function updateFavButton() {
    if (!state.currentTrack) return;
    elements.favBtn.classList.toggle('player__track-fav--active', isFavorite(state.currentTrack));
}

// ================================
// VOLUME
// ================================

function setVolume(value) {
    state.volume = Math.max(0, Math.min(100, value));
    elements.audioPlayer.volume = state.volume / 100;
    updateVolumeUI();
    saveToStorage();
}

function toggleMute() {
    state.isMuted = !state.isMuted;
    elements.audioPlayer.muted = state.isMuted;
    updateVolumeUI();
}

function updateVolumeUI() {
    const fill = state.isMuted ? 0 : state.volume;
    elements.volumeFill.style.width = fill + '%';
    
    const icons = elements.muteBtn.querySelectorAll('svg');
    if (state.isMuted || state.volume === 0) {
        icons[0].style.display = 'none';
        icons[1].style.display = 'block';
    } else {
        icons[0].style.display = 'block';
        icons[1].style.display = 'none';
    }
}

function updateProgressUI() {
    if (!state.duration) return;
    const pct = (state.progress / state.duration) * 100;
    elements.progressFill.style.width = pct + '%';
    elements.currentTime.textContent = formatTime(state.progress);
}

// ================================
// RENDER
// ================================

function renderTracks() {
    // Uploaded tracks
    if (elements.uploadedList) {
        if (state.uploadedTracks.length === 0) {
            elements.uploadedList.innerHTML = '<div class="empty-state"><p>Загрузи треки, чтобы начать</p></div>';
        } else {
            elements.uploadedList.innerHTML = state.uploadedTracks.map((track, idx) => renderTrackRow(track, idx)).join('');
        }
    }
    
    // Favorites
    if (elements.favoritesList) {
        if (state.favorites.length === 0) {
            elements.favoritesList.innerHTML = '<div class="empty-state"><p>Добавь треки в избранное</p></div>';
        } else {
            elements.favoritesList.innerHTML = state.favorites.map((track, idx) => renderTrackRow(track, idx)).join('');
        }
    }
}

function renderTrackRow(track, idx) {
    const isPlaying = state.currentTrack && state.currentTrack.id === track.id;
    const isFav = isFavorite(track);
    
    return `
    <div class="track-row ${isPlaying ? 'track-row--playing' : ''}" data-track-id="${track.id}">
        <div class="track-row__number">${String(idx + 1).padStart(2, '0')}</div>
        <div class="track-row__playing"><span></span><span></span><span></span><span></span></div>
        <div class="track-row__cover">
            <img src="${track.cover}" alt="${track.title}" onerror="this.style.display='none'">
        </div>
        <div class="track-row__title">${track.title}</div>
        <div class="track-row__artist">${track.artist}</div>
        <div class="track-row__duration">${formatTime(track.duration)}</div>
        <div class="track-row__actions">
            <button class="track-row__action ${isFav ? 'track-row__action--active' : ''}" data-action="fav">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${isFav ? 'currentColor' : 'none'}"/></svg>
            </button>
            <button class="track-row__action" data-action="delete" title="Удалить">
                <svg viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2"/></svg>
            </button>
        </div>
    </div>
    `;
}

function renderCurrentTrack() {
    if (!state.currentTrack || !elements.currentTitle) return;
    elements.currentTitle.textContent = state.currentTrack.title;
    elements.currentArtist.textContent = state.currentTrack.artist;
    elements.totalTime.textContent = formatTime(state.currentTrack.duration || 0);
}

function highlightCurrentTrack() {
    document.querySelectorAll('.track-row').forEach(row => {
        const isPlaying = state.currentTrack && row.dataset.trackId == state.currentTrack.id;
        row.classList.toggle('track-row--playing', isPlaying);
    });
}

function updatePlayButton() {
    if (!elements.playBtn) return;
    const playIcon = elements.playBtn.querySelector('.player__btn-icon-play');
    const pauseIcon = elements.playBtn.querySelector('.player__btn-icon-pause');
    
    if (state.isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

// ================================
// EVENTS
// ================================

function bindEvents() {
    // Upload
    if (elements.dropZone) {
        elements.dropZone.addEventListener('dragover', e => { e.preventDefault(); elements.dropZone.classList.add('drag-over'); });
        elements.dropZone.addEventListener('dragleave', () => elements.dropZone.classList.remove('drag-over'));
        elements.dropZone.addEventListener('drop', e => {
            e.preventDefault();
            elements.dropZone.classList.remove('drag-over');
            handleFileUpload(e.dataTransfer.files);
        });
    }
    
    if (elements.fileInput) {
        elements.fileInput.addEventListener('change', e => handleFileUpload(e.target.files));
    }
    
    // Player controls
    elements.playBtn.addEventListener('click', togglePlay);
    elements.prevBtn.addEventListener('click', prevTrack);
    elements.nextBtn.addEventListener('click', nextTrack);
    elements.shuffleBtn.addEventListener('click', toggleShuffle);
    elements.repeatBtn.addEventListener('click', toggleRepeat);
    elements.muteBtn.addEventListener('click', toggleMute);
    
    elements.volumeBar.addEventListener('click', e => {
        const rect = elements.volumeBar.getBoundingClientRect();
        setVolume(((e.clientX - rect.left) / rect.width) * 100);
    });
    
    elements.progressBar.addEventListener('click', e => {
        if (!state.duration) return;
        const rect = elements.progressBar.getBoundingClientRect();
        elements.audioPlayer.currentTime = ((e.clientX - rect.left) / rect.width) * state.duration;
    });
    
    elements.favBtn.addEventListener('click', () => toggleFavorite(state.currentTrack));
    
    // Track clicks
    document.addEventListener('click', e => {
        const trackRow = e.target.closest('.track-row');
        if (trackRow && !e.target.closest('.track-row__action')) {
            const track = [...state.uploadedTracks, ...state.favorites].find(t => t.id == trackRow.dataset.trackId);
            if (track) {
                state.queue = [...state.uploadedTracks, ...state.favorites];
                state.queueIndex = state.queue.findIndex(t => t.id === track.id);
                playTrack(track);
            }
        }
        
        const actionBtn = e.target.closest('.track-row__action');
        if (actionBtn) {
            e.stopPropagation();
            const track = [...state.uploadedTracks, ...state.favorites].find(t => t.id == actionBtn.closest('.track-row').dataset.trackId);
            const action = actionBtn.dataset.action;
            
            if (action === 'fav') {
                toggleFavorite(track);
                actionBtn.classList.toggle('track-row__action--active');
            } else if (action === 'delete') {
                deleteTrack(track);
            }
        }
    });
    
    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT') return;
        if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
        else if (e.code === 'ArrowRight' && e.ctrlKey) nextTrack();
        else if (e.code === 'ArrowLeft' && e.ctrlKey) prevTrack();
        else if (e.code === 'KeyS') toggleShuffle();
        else if (e.code === 'KeyR') toggleRepeat();
    });
}

function deleteTrack(track) {
    state.uploadedTracks = state.uploadedTracks.filter(t => t.id !== track.id);
    state.favorites = state.favorites.filter(t => t.id !== track.id);
    saveToStorage();
    renderTracks();
}

// ================================
// STORAGE
// ================================

function saveToStorage() {
    try {
        // Save favorites (with audio as blob reference - works offline)
        const favsToSave = state.favorites.map(t => ({
            id: t.id,
            title: t.title,
            artist: t.artist,
            album: t.album,
            duration: t.duration,
            cover: t.cover,
            genre: t.genre,
            color: t.color,
            isLocal: t.isLocal,
            audioUrl: t.audioUrl
        }));
        
        localStorage.setItem('soundwave_data', JSON.stringify({
            volume: state.volume,
            favorites: favsToSave,
            repeat: state.repeat,
            shuffle: state.shuffle
        }));
    } catch (e) {
        console.error('Save error:', e);
    }
}

function loadFromStorage() {
    try {
        const data = JSON.parse(localStorage.getItem('soundwave_data'));
        if (data) {
            state.volume = data.volume ?? 70;
            state.favorites = data.favorites ?? [];
            state.repeat = data.repeat ?? 'off';
            state.shuffle = data.shuffle ?? false;
            
            if (elements.shuffleBtn) elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
            if (elements.repeatBtn) elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
        }
    } catch (e) {}
}

// ================================
// UTILS
// ================================

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + s.toString().padStart(2, '0');
}

// ================================
// VISUALIZER
// ================================

function createVisualizer() {
    const player = document.querySelector('.player');
    if (!player) return;
    
    const visualizer = document.createElement('div');
    visualizer.className = 'visualizer';
    visualizer.innerHTML = Array(32).fill(0).map(() => '<div class="visualizer-bar"></div>').join('');
    player.appendChild(visualizer);
}

function updateVisualizer() {
    if (!state.isPlaying) return;
    
    const bars = document.querySelectorAll('.visualizer-bar');
    bars.forEach((bar, i) => {
        const variation = Math.sin(state.progress * 10 + i * 0.5) * 0.3 + 0.7;
        bar.style.height = (20 + (60 * variation)) + '%';
    });
}

// ================================
// INIT
// ================================

document.addEventListener('DOMContentLoaded', init);