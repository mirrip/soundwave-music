/**
 * SoundWave Music - PRO Version
 * With Custom Upload, My Wave, Similar Tracks, Advanced Design
 */

// ================================
// Music Database (Popular Tracks)
// ================================

const POPULAR_ALBUMS = [
    { id: 1, title: 'Midnight Sessions', artist: 'The Night Owls', cover: 'https://picsum.photos/seed/al1/300/300', year: 2024, color: '#6366f1', genre: 'Electronic', plays: 1542000 },
    { id: 2, title: 'Summer Vibes 2024', artist: 'Sunset Collective', cover: 'https://picsum.photos/seed/al2/300/300', year: 2024, color: '#f59e0b', genre: 'Pop', plays: 2341000 },
    { id: 3, title: 'Electronic Dreams', artist: 'Synth Wave', cover: 'https://picsum.photos/seed/al3/300/300', year: 2023, color: '#8b5cf6', genre: 'Electronic', plays: 1890000 },
    { id: 4, title: 'Acoustic Stories', artist: 'Guitar Tales', cover: 'https://picsum.photos/seed/al4/300/300', year: 2024, color: '#78350f', genre: 'Acoustic', plays: 987000 },
    { id: 5, title: 'Hip-Hop Supreme', artist: 'Urban Flow', cover: 'https://picsum.photos/seed/al5/300/300', year: 2024, color: '#166534', genre: 'Hip-Hop', plays: 3210000 },
    { id: 6, title: 'Chill Lounge', artist: 'Lounge Masters', cover: 'https://picsum.photos/seed/al6/300/300', year: 2023, color: '#0d9488', genre: 'Ambient', plays: 1234000 },
    { id: 7, title: 'Rock Anthems', artist: 'Thunder Band', cover: 'https://picsum.photos/seed/al7/300/300', year: 2024, color: '#dc2626', genre: 'Rock', plays: 2100000 },
    { id: 8, title: 'Jazz Nights', artist: 'Smooth Quartet', cover: 'https://picsum.photos/seed/al8/300/300', year: 2023, color: '#7c2d12', genre: 'Jazz', plays: 876000 },
    { id: 9, title: 'EDM Bangers', artist: 'DJ Pulse', cover: 'https://picsum.photos/seed/al9/300/300', year: 2024, color: '#ec4899', genre: 'EDM', plays: 4521000 },
    { id: 10, title: 'Lo-Fi Beats', artist: 'Chillhop', cover: 'https://picsum.photos/seed/al10/300/300', year: 2024, color: '#14b8a6', genre: 'Lo-Fi', plays: 2890000 }
];

const POPULAR_TRACKS = [
    { id: 1, title: 'Midnight in Tokyo', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 234, cover: 'https://picsum.photos/seed/t1/100/100', genre: 'Electronic', bpm: 128, plays: 450000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', color: '#6366f1', tags: ['electronic', 'night', 'city'] },
    { id: 2, title: 'Neon Dreams', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 198, cover: 'https://picsum.photos/seed/t2/100/100', genre: 'Electronic', bpm: 140, plays: 380000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', color: '#8b5cf6', tags: ['electronic', 'neon', 'retro'] },
    { id: 3, title: 'Summer Sunset', artist: 'Sunset Collective', album: 'Summer Vibes 2024', duration: 245, cover: 'https://picsum.photos/seed/t3/100/100', genre: 'Pop', bpm: 120, plays: 520000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', color: '#f59e0b', tags: ['summer', 'pop', 'vibes'] },
    { id: 4, title: 'Ocean Breeze', artist: 'Lounge Masters', album: 'Chill Lounge', duration: 267, cover: 'https://picsum.photos/seed/t4/100/100', genre: 'Ambient', bpm: 90, plays: 290000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', color: '#0d9488', tags: ['chill', 'ocean', 'relax'] },
    { id: 5, title: 'Guitar Stories', artist: 'Guitar Tales', album: 'Acoustic Stories', duration: 189, cover: 'https://picsum.photos/seed/t5/100/100', genre: 'Acoustic', bpm: 100, plays: 180000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', color: '#78350f', tags: ['acoustic', 'guitar', 'story'] },
    { id: 6, title: 'Street Flow', artist: 'Urban Flow', album: 'Hip-Hop Supreme', duration: 213, cover: 'https://picsum.photos/seed/t6/100/100', genre: 'Hip-Hop', bpm: 85, plays: 890000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', color: '#166534', tags: ['hiphop', 'street', 'urban'] },
    { id: 7, title: 'Thunder Road', artist: 'Thunder Band', album: 'Rock Anthems', duration: 278, cover: 'https://picsum.photos/seed/t7/100/100', genre: 'Rock', bpm: 150, plays: 620000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', color: '#dc2626', tags: ['rock', 'anthem', 'energy'] },
    { id: 8, title: 'Smooth Jazz', artist: 'Smooth Quartet', album: 'Jazz Nights', duration: 302, cover: 'https://picsum.photos/seed/t8/100/100', genre: 'Jazz', bpm: 110, plays: 220000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', color: '#7c2d12', tags: ['jazz', 'smooth', 'night'] },
    { id: 9, title: 'Digital Love', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 224, cover: 'https://picsum.photos/seed/t9/100/100', genre: 'Electronic', bpm: 135, plays: 410000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', color: '#8b5cf6', tags: ['electronic', 'love', 'digital'] },
    { id: 10, title: 'Dancing Rain', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 256, cover: 'https://picsum.photos/seed/t10/100/100', genre: 'Electronic', bpm: 125, plays: 380000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', color: '#6366f1', tags: ['electronic', 'dance', 'rain'] },
    { id: 11, title: 'Beach Party', artist: 'Sunset Collective', album: 'Summer Vibes 2024', duration: 198, cover: 'https://picsum.photos/seed/t11/100/100', genre: 'Pop', bpm: 128, plays: 650000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', color: '#f59e0b', tags: ['summer', 'beach', 'party'] },
    { id: 12, title: 'Mountain Echo', artist: 'Guitar Tales', album: 'Acoustic Stories', duration: 234, cover: 'https://picsum.photos/seed/t12/100/100', genre: 'Acoustic', bpm: 95, plays: 150000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3', color: '#78350f', tags: ['acoustic', 'mountain', 'nature'] },
    { id: 13, title: 'City Nights', artist: 'Urban Flow', album: 'Hip-Hop Supreme', duration: 245, cover: 'https://picsum.photos/seed/t13/100/100', genre: 'Hip-Hop', bpm: 88, plays: 780000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', color: '#166534', tags: ['hiphop', 'city', 'night'] },
    { id: 14, title: 'Calm Waters', artist: 'Lounge Masters', album: 'Chill Lounge', duration: 289, cover: 'https://picsum.photos/seed/t14/100/100', genre: 'Ambient', bpm: 75, plays: 340000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3', color: '#0d9488', tags: ['ambient', 'calm', 'water'] },
    { id: 15, title: 'Electric Storm', artist: 'DJ Pulse', album: 'EDM Bangers', duration: 267, cover: 'https://picsum.photos/seed/t15/100/100', genre: 'EDM', bpm: 145, plays: 920000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3', color: '#ec4899', tags: ['edm', 'storm', 'bass'] },
    { id: 16, title: 'Fire Inside', artist: 'Thunder Band', album: 'Rock Anthems', duration: 312, cover: 'https://picsum.photos/seed/t16/100/100', genre: 'Rock', bpm: 155, plays: 540000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3', color: '#dc2626', tags: ['rock', 'fire', 'energy'] },
    { id: 17, title: 'Moonlight Groove', artist: 'Chillhop', album: 'Lo-Fi Beats', duration: 178, cover: 'https://picsum.photos/seed/t17/100/100', genre: 'Lo-Fi', bpm: 85, plays: 1100000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', color: '#14b8a6', tags: ['lofi', 'moonlight', 'chill'] },
    { id: 18, title: 'Golden Hour', artist: 'Sunset Collective', album: 'Summer Vibes 2024', duration: 223, cover: 'https://picsum.photos/seed/t18/100/100', genre: 'Pop', bpm: 118, plays: 480000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', color: '#f59e0b', tags: ['summer', 'golden', 'sunset'] },
    { id: 19, title: 'Tokyo Nights', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 267, cover: 'https://picsum.photos/seed/t19/100/100', genre: 'Electronic', bpm: 130, plays: 420000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', color: '#6366f1', tags: ['electronic', 'tokyo', 'night'] },
    { id: 20, title: 'Morning Coffee', artist: 'Chillhop', album: 'Lo-Fi Beats', duration: 198, cover: 'https://picsum.photos/seed/t20/100/100', genre: 'Lo-Fi', bpm: 80, plays: 980000, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', color: '#14b8a6', tags: ['lofi', 'morning', 'coffee'] }
];

// ================================
// App State
// ================================

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
    recentlyPlayed: [],
    myWave: [],
    similarTracks: [],
    customTracks: [],
    currentView: 'home',
    currentPlaylistId: null,
    searchQuery: '',
    audioContext: null,
    analyser: null,
    isLoading: false,
    currentColor: '#fc0'
};

const elements = {};

// ================================
// Initialization
// ================================

function init() {
    cacheElements();
    loadFromStorage();
    loadCustomTracks();
    bindEvents();
    renderAlbums();
    renderTracks(POPULAR_TRACKS, 'forYou', 'home');
    renderTracks(POPULAR_TRACKS.slice(0, 10), 'hitsList', 'home');
    renderTracks(POPULAR_TRACKS, 'allTracks', 'library');
    renderPlaylists();
    setupAudio();
    updateVolumeUI();
    createVisualizer();
    createParticles();
    handleFileUpload();
    renderMyWave();
}

function loadCustomTracks() {
    const saved = localStorage.getItem('customTracks');
    if (saved) {
        state.customTracks = JSON.parse(saved);
    }
}

function handleFileUpload() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    
    if (!dropZone) return;
    
    dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('audio/'));
        processFiles(files);
    });
    
    if (fileInput) {
        fileInput.addEventListener('change', e => {
            const files = Array.from(e.target.files);
            processFiles(files);
        });
    }
}

function processFiles(files) {
    files.forEach((file, idx) => {
        const track = {
            id: Date.now() + idx,
            title: file.name.replace(/\.[^/.]+$/, ''),
            artist: 'Мое аудио',
            album: 'Моя волна',
            duration: 0,
            cover: null,
            genre: 'Custom',
            bpm: 0,
            plays: 0,
            audioUrl: URL.createObjectURL(file),
            color: '#fc0',
            tags: ['custom', 'my'],
            isCustom: true
        };
        
        const audio = new Audio();
        audio.src = track.audioUrl;
        audio.addEventListener('loadedmetadata', () => {
            track.duration = Math.floor(audio.duration);
            track.cover = 'https://picsum.photos/seed/' + track.id + '/100/100';
            addCustomTrack(track);
        });
        
        audio.load();
    });
}

function addCustomTrack(track) {
    state.customTracks.push(track);
    localStorage.setItem('customTracks', JSON.stringify(state.customTracks));
    renderCustomTracks();
}

function renderCustomTracks() {
    const container = document.getElementById('customTracks');
    if (!container) return;
    
    renderTracks(state.customTracks, 'customTracks', 'authors');
}

function cacheElements() {
    elements.audioPlayer = document.getElementById('audioPlayer');
    elements.dropZone = document.getElementById('dropZone');
    elements.fileInput = document.getElementById('fileInput');
    elements.forYou = document.getElementById('forYou');
    elements.allTracks = document.getElementById('allTracks');
    elements.hitsList = document.getElementById('hitsList');
    elements.myWaveList = document.getElementById('myWaveList');
    elements.similarTracks = document.getElementById('similarTracks');
    elements.customTracks = document.getElementById('customTracks');
    elements.searchResults = document.getElementById('searchResults');
    elements.playlistTracks = document.getElementById('playlistTracks');
    elements.playlistList = document.getElementById('playlistList');
    elements.userPlaylists = document.getElementById('userPlaylists');
    elements.queueList = document.getElementById('queueList');
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
    elements.queueBtn = document.getElementById('queueBtn');
    elements.queueModal = document.getElementById('queueModal');
    elements.queueModalClose = document.getElementById('queueModalClose');
    elements.playlistName = document.getElementById('playlistName');
    elements.playlistPlayBtn = document.getElementById('playlistPlayBtn');
    elements.createPlaylistModal = document.getElementById('createPlaylistModal');
    elements.playlistNameInput = document.getElementById('playlistNameInput');
    elements.savePlaylistBtn = document.getElementById('savePlaylistBtn');
    elements.contextMenu = document.getElementById('contextMenu');
    elements.playerTrackCover = document.querySelector('.player__track-cover');
    elements.albumsGrid = document.getElementById('albumsGrid');
}

function setupAudio() {
    elements.audioPlayer.volume = state.volume / 100;
    
    elements.audioPlayer.addEventListener('timeupdate', () => {
        state.progress = elements.audioPlayer.currentTime;
        updateProgressUI();
        updateVisualizer();
    });
    
    elements.audioPlayer.addEventListener('loadedmetadata', () => {
        state.duration = elements.audioPlayer.duration;
        elements.totalTime.textContent = formatTime(state.duration);
    });
    
    elements.audioPlayer.addEventListener('ended', handleTrackEnd);
    elements.audioPlayer.addEventListener('play', () => { state.isPlaying = true; updatePlayButton(); });
    elements.audioPlayer.addEventListener('pause', () => { state.isPlaying = false; updatePlayButton(); });
    elements.audioPlayer.addEventListener('waiting', () => { state.isLoading = true; document.body.classList.add('loading'); });
    elements.audioPlayer.addEventListener('canplay', () => { state.isLoading = false; document.body.classList.remove('loading'); });
}

function findSimilarTracks(track) {
    if (!track || !track.tags) return [];
    
    const all = [...POPULAR_TRACKS, ...state.customTracks];
    const similar = all.filter(t => {
        if (t.id === track.id) return false;
        
        let score = 0;
        
        if (t.genre === track.genre) score += 2;
        if (t.bpm && track.bpm && Math.abs(t.bpm - track.bpm) < 15) score += 1;
        if (t.tags) {
            t.tags.forEach(tag => {
                if (track.tags.includes(tag)) score += 0.5;
            });
        }
        
        return score >= 1;
    });
    
    return similar.sort((a, b) => {
        const scoreA = getSimilarityScore(a, track);
        const scoreB = getSimilarityScore(b, track);
        return scoreB - scoreA;
    }).slice(0, 15);
}

function getSimilarityScore(t, target) {
    let score = 0;
    if (t.genre === target.genre) score += 3;
    if (t.bpm && target.bpm && Math.abs(t.bpm - target.bpm) < 15) score += 2;
    if (t.tags && target.tags) {
        t.tags.forEach(tag => {
            if (target.tags.includes(tag)) score += 1;
        });
    }
    return score;
}

function playSimilar() {
    if (!state.currentTrack) return;
    
    state.similarTracks = findSimilarTracks(state.currentTrack);
    
    if (state.similarTracks.length > 0) {
        state.queue = state.similarTracks;
        state.queueIndex = 0;
        playTrack(state.similarTracks[0]);
        renderSimilarTracks();
    }
}

function renderSimilarTracks() {
    const container = elements.similarTracks;
    if (!container) return;
    
    if (state.similarTracks.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); padding: 20px;">Нажми "Моя волна" для похожих треков</p>';
        return;
    }
    
    renderTracks(state.similarTracks, 'similarTracks', 'wave');
}

function playTrack(track) {
    state.currentTrack = track;
    state.progress = 0;
    state.duration = 0;
    
    if (track.color) {
        updateThemeColor(track.color);
    }
    
    if (elements.playerTrackCover && track.cover) {
        elements.playerTrackCover.src = track.cover;
    }
    
    renderCurrentTrack();
    addToHistory(track);
    addToMyWave(track);
    
    if (track.audioUrl) {
        elements.audioPlayer.src = track.audioUrl;
        elements.audioPlayer.play().catch(e => console.error('Play error:', e));
    }
    
    state.isPlaying = true;
    updatePlayButton();
    highlightCurrentTrack();
    updateFavButton();
    updateFavButton();
}

function togglePlay() {
    if (!state.currentTrack) {
        const tracks = [...POPULAR_TRACKS, ...state.customTracks];
        if (tracks.length > 0) {
            playTrack(tracks[0]);
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
    const tracks = state.queue.length > 0 ? state.queue : [...POPULAR_TRACKS, ...state.customTracks];
    if (tracks.length === 0) return;
    
    if (state.shuffle) {
        state.queueIndex = Math.floor(Math.random() * tracks.length);
    } else {
        state.queueIndex = (state.queueIndex + 1) % tracks.length;
    }
    
    playTrack(tracks[state.queueIndex]);
}

function prevTrack() {
    if (state.progress > 3) {
        state.progress = 0;
        elements.audioPlayer.currentTime = 0;
        updateProgressUI();
        return;
    }
    
    const tracks = state.queue.length > 0 ? state.queue : [...POPULAR_TRACKS, ...state.customTracks];
    state.queueIndex = (state.queueIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[state.queueIndex]);
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
    saveToStorage();
}

function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    const idx = modes.indexOf(state.repeat);
    state.repeat = modes[(idx + 1) % modes.length];
    
    elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
    elements.repeatMode.textContent = state.repeat === 'one' ? '1' : '';
    saveToStorage();
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

function addToHistory(track) {
    let history = JSON.parse(localStorage.getItem('playHistory') || '[]');
    history = history.filter(t => t.id !== track.id);
    history.unshift(track);
    history = history.slice(0, 100);
    localStorage.setItem('playHistory', JSON.stringify(history));
    state.recentlyPlayed = history;
}

function addToMyWave(track) {
    let wave = JSON.parse(localStorage.getItem('myWave') || '[]');
    
    const existing = wave.find(t => t.id === track.id);
    if (existing) {
        existing.lastPlayed = Date.now();
        existing.playCount = (existing.playCount || 0) + 1;
    } else {
        wave.push({
            ...track,
            lastPlayed: Date.now(),
            playCount: 1
        });
    }
    
    wave = wave.sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
    localStorage.setItem('myWave', JSON.stringify(wave));
    state.myWave = wave;
    
    renderMyWave();
}

function renderMyWave() {
    const container = elements.myWaveList;
    if (!container) return;
    
    const wave = JSON.parse(localStorage.getItem('myWave') || '[]');
    
    if (wave.length === 0) {
        container.innerHTML = '<div class="empty-wave"><p>Слушай музыку - она появится здесь!</p></div>';
        return;
    }
    
    renderTracks(wave.slice(0, 20), 'myWaveList', 'wave');
}

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

function updateThemeColor(color) {
    state.currentColor = color;
    document.documentElement.style.setProperty('--current-color', color);
    document.body.classList.add('color-change');
    setTimeout(() => document.body.classList.remove('color-change'), 500);
}

function toggleFavorite(track) {
    const idx = state.favorites.findIndex(t => t.id === track.id);
    if (idx === -1) {
        state.favorites.push(track);
    } else {
        state.favorites.splice(idx, 1);
    }
    updateFavButton();
    saveToStorage();
}

function updateFavButton() {
    if (!state.currentTrack) return;
    elements.favBtn.classList.toggle('player__track-fav--active', isFavorite(state.currentTrack));
}

function isFavorite(track) {
    return state.favorites.some(t => t.id === track.id);
}

function createPlaylist(name) {
    state.playlists.push({ id: Date.now(), name, tracks: [] });
    renderPlaylists();
    saveToStorage();
}

function openPlaylist(id) {
    const playlist = state.playlists.find(p => p.id === id);
    if (!playlist) return;
    
    elements.playlistName.textContent = playlist.name;
    renderTracks(playlist.tracks, 'playlistTracks', 'playlist');
    showPage('playlist');
}

function search(query) {
    if (!query) {
        if (elements.searchResults) elements.searchResults.innerHTML = '';
        return;
    }
    
    const q = query.toLowerCase();
    const all = [...POPULAR_TRACKS, ...state.customTracks];
    const results = all.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        t.album.toLowerCase().includes(q) ||
        t.genre.toLowerCase().includes(q)
    );
    
    renderTracks(results, 'searchResults', 'search');
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
    document.querySelectorAll('.header__nav-link').forEach(l => l.classList.remove('header__nav-link--active'));
    
    const pageEl = document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1));
    const navLink = document.querySelector('.header__nav-link[data-page="' + page + '"]');
    
    if (pageEl) pageEl.classList.add('page--active');
    if (navLink) navLink.classList.add('header__nav-link--active');
    state.currentView = page;
}

function renderAlbums() {
    const html = POPULAR_ALBUMS.map(album => `
        <div class="album-card" data-album="${album.id}" style="--album-color: ${album.color}">
            <div class="album-card__cover">
                <img src="${album.cover}" alt="${album.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="album-card__cover-placeholder" style="display:none">
                    <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2"/></svg>
                </div>
                <button class="album-card__play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
            </div>
            <div class="album-card__title">${album.title}</div>
            <div class="album-card__artist">${album.artist}</div>
            <div class="album-card__plays">${formatPlays(album.plays)}</div>
        </div>
    `).join('');
    
    if (elements.albumsGrid) elements.albumsGrid.innerHTML = html;
}

function renderTracks(tracks, containerId, view) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (tracks.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Ничего не найдено</p></div>';
        return;
    }
    
    const html = tracks.map((track, idx) => {
        const isPlaying = state.currentTrack && state.currentTrack.id === track.id;
        const isFav = isFavorite(track);
        
        return `
        <div class="track-row ${isPlaying ? 'track-row--playing' : ''}" data-track-id="${track.id}" data-album-color="${track.color}">
            <div class="track-row__number">${String(idx + 1).padStart(2, '0')}</div>
            <div class="track-row__playing"><span></span><span></span><span></span><span></span></div>
            <div class="track-row__cover">
                <img src="${track.cover}" alt="${track.title}" onerror="this.style.display='none'">
            </div>
            <div class="track-row__title">${track.title}</div>
            <div class="track-row__artist">${track.artist}</div>
            <div class="track-row__genre">${track.genre}</div>
            <div class="track-row__duration">${formatTime(track.duration)}</div>
            <div class="track-row__actions">
                <button class="track-row__action ${isFav ? 'track-row__action--active' : ''}" data-action="fav" title="В избранное">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${isFav ? 'currentColor' : 'none'}"/></svg>
                </button>
                <button class="track-row__action" data-action="queue" title="В очередь">
                    <svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="2"/></svg>
                </button>
            </div>
        </div>
    `}).join('');
    
    container.innerHTML = html;
}

function renderPlaylists() {
    const html = state.playlists.map(p => `
        <div class="sidebar__item" data-playlist="${p.id}">
            <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2"/></svg>
            <span>${p.name}</span>
        </div>
    `).join('');
    
    if (elements.userPlaylists) elements.userPlaylists.innerHTML = html;
}

function renderQueue() {
    if (!elements.queueList) return;
    
    if (state.queue.length === 0) {
        elements.queueList.innerHTML = '<div class="queue-empty"><p>Очередь пуста</p></div>';
        return;
    }
    
    const html = state.queue.map((track, idx) => `
        <div class="queue-item" data-index="${idx}">
            <div class="queue-item-cover" style="background: ${track.color}"></div>
            <div class="queue-item-info">
                <div class="queue-item-title">${track.title}</div>
                <div class="queue-item-artist">${track.artist}</div>
            </div>
            <button class="queue-item-remove" data-action="remove">✕</button>
        </div>
    `).join('');
    
    elements.queueList.innerHTML = html;
}

function renderCurrentTrack() {
    if (!state.currentTrack || !elements.currentTitle) return;
    
    elements.currentTitle.textContent = state.currentTrack.title;
    elements.currentArtist.textContent = state.currentTrack.artist;
    elements.totalTime.textContent = formatTime(state.currentTrack.duration);
}

function highlightCurrentTrack() {
    document.querySelectorAll('.track-row').forEach(row => {
        const isPlaying = state.currentTrack && row.dataset.trackId == state.currentTrack.id;
        row.classList.toggle('track-row--playing', isPlaying);
        if (isPlaying) row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

function createVisualizer() {
    const player = document.querySelector('.player');
    if (!player) return;
    
    const visualizer = document.createElement('div');
    visualizer.className = 'visualizer';
    visualizer.innerHTML = Array(32).fill(0).map((_, i) => 
        '<div class="visualizer-bar" style="--delay: ' + (i * 0.02) + 's"></div>'
    ).join('');
    
    player.appendChild(visualizer);
}

function createParticles() {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = 'left: ' + (Math.random() * 100) + '%; animation-duration: ' + (15 + Math.random() * 20) + 's; animation-delay: ' + (Math.random() * 10) + 's; width: ' + (2 + Math.random() * 4) + 'px; height: ' + (2 + Math.random() * 4) + 'px;';
        document.body.appendChild(p);
    }
}

function updateVisualizer() {
    if (!state.isPlaying) return;
    
    const bars = document.querySelectorAll('.visualizer-bar');
    bars.forEach((bar, i) => {
        const variation = Math.sin(state.progress * 10 + i * 0.5) * 0.3 + 0.7;
        bar.style.height = (20 + (60 * variation)) + '%';
    });
}

function bindEvents() {
    // Navigation
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });
    
    // Sidebar
    document.getElementById('playlistList').addEventListener('click', e => {
        const item = e.target.closest('.sidebar__item');
        if (!item) return;
        
        const p = item.dataset.playlist;
        
        if (p === 'all') {
            renderTracks([...POPULAR_TRACKS, ...state.customTracks], 'playlistTracks', 'playlist');
            elements.playlistName.textContent = 'Все треки';
            showPage('playlist');
        } else if (p === 'favorites') {
            renderTracks(state.favorites, 'playlistTracks', 'playlist');
            elements.playlistName.textContent = 'Избранное';
            showPage('playlist');
        } else if (p === 'wave') {
            renderMyWave();
            showPage('wave');
        } else if (p === 'authors') {
            renderCustomTracks();
            showPage('authors');
        } else if (p === 'recent') {
            const recent = JSON.parse(localStorage.getItem('playHistory') || '[]');
            renderTracks(recent, 'playlistTracks', 'playlist');
            elements.playlistName.textContent = 'Недавно';
            showPage('playlist');
        }
    });
    
    // Custom tracks
    elements.userPlaylists.addEventListener('click', e => {
        const item = e.target.closest('.sidebar__item');
        if (item) openPlaylist(parseInt(item.dataset.playlist));
    });
    
    // Search
    document.querySelector('.header__search-input').addEventListener('input', e => {
        search(e.target.value);
        if (e.target.value) showPage('search');
    });
    
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
    
    elements.favBtn.addEventListener('click', () => {
        if (state.currentTrack) toggleFavorite(state.currentTrack);
    });
    
    // My Wave button
    const myWaveBtn = document.getElementById('myWaveBtn');
    if (myWaveBtn) {
        myWaveBtn.addEventListener('click', playSimilar);
    }
    
    // Queue
    elements.queueBtn.addEventListener('click', () => {
        elements.queueModal.classList.toggle('queue-modal--active');
    });
    elements.queueModalClose.addEventListener('click', () => {
        elements.queueModal.classList.remove('queue-modal--active');
    });
    
    elements.queueList.addEventListener('click', e => {
        const removeBtn = e.target.closest('[data-action="remove"]');
        if (removeBtn) {
            const idx = parseInt(removeBtn.closest('.queue-item').dataset.index);
            state.queue.splice(idx, 1);
            renderQueue();
            return;
        }
        
        const item = e.target.closest('.queue-item');
        if (item) playTrack(state.queue[parseInt(item.dataset.index)]);
    });
    
    // Create playlist
    document.querySelector('.sidebar__create-btn').addEventListener('click', () => {
        elements.createPlaylistModal.classList.add('modal--active');
        elements.playlistNameInput.focus();
    });
    
    elements.closePlaylistModal.addEventListener('click', () => {
        elements.createPlaylistModal.classList.remove('modal--active');
    });
    
    elements.savePlaylistBtn.addEventListener('click', () => {
        const name = elements.playlistNameInput.value.trim();
        if (name) {
            createPlaylist(name);
            elements.playlistNameInput.value = '';
            elements.createPlaylistModal.classList.remove('modal--active');
        }
    });
    
    elements.createPlaylistModal.addEventListener('click', e => {
        if (e.target === elements.createPlaylistModal) {
            elements.createPlaylistModal.classList.remove('modal--active');
        }
    });
    
    // Playlist play
    elements.playlistPlayBtn.addEventListener('click', () => {
        const tracks = [...document.querySelectorAll('#playlistTracks .track-row')].map(
            r => [...POPULAR_TRACKS, ...state.customTracks].find(t => t.id == r.dataset.trackId)
        ).filter(Boolean);
        
        if (tracks.length > 0) {
            state.queue = tracks;
            state.queueIndex = 0;
            playTrack(tracks[0]);
        }
    });
    
    // Track clicks
    document.addEventListener('click', e => {
        const albumPlay = e.target.closest('.album-card__play');
        if (albumPlay) {
            playTrack(POPULAR_TRACKS[parseInt(albumPlay.closest('.album-card').dataset.album) - 1]);
            return;
        }
        
        const trackRow = e.target.closest('.track-row');
        if (trackRow && !e.target.closest('.track-row__action')) {
            const all = [...POPULAR_TRACKS, ...state.customTracks];
            const track = all.find(t => t.id == trackRow.dataset.trackId);
            if (track) {
                const container = trackRow.closest('.tracks-list');
                if (container) {
                    const rows = container.querySelectorAll('.track-row');
                    state.queue = [...rows].map(r => all.find(t => t.id == r.dataset.trackId)).filter(Boolean);
                }
                state.queueIndex = state.queue.findIndex(t => t.id === track.id);
                playTrack(track);
            }
        }
        
        const actionBtn = e.target.closest('.track-row__action');
        if (actionBtn) {
            e.stopPropagation();
            const all = [...POPULAR_TRACKS, ...state.customTracks];
            const track = all.find(t => t.id == actionBtn.closest('.track-row').dataset.trackId);
            const action = actionBtn.dataset.action;
            
            if (action === 'fav') {
                toggleFavorite(track);
                actionBtn.classList.toggle('track-row__action--active');
            } else if (action === 'queue') {
                state.queue.push(track);
                renderQueue();
            }
        }
    });
    
    // Context menu
    document.addEventListener('contextmenu', e => {
        const trackRow = e.target.closest('.track-row');
        if (trackRow) {
            e.preventDefault();
            elements.contextMenu.style.left = e.clientX + 'px';
            elements.contextMenu.style.top = e.clientY + 'px';
            elements.contextMenu.classList.add('context-menu--active');
            elements.contextMenu.dataset.trackId = trackRow.dataset.trackId;
            
            const all = [...POPULAR_TRACKS, ...state.customTracks];
            const track = all.find(t => t.id == trackRow.dataset.trackId);
            const isFav = isFavorite(track);
            document.querySelector('[data-action="addToFavorites"]').style.display = isFav ? 'none' : 'block';
            document.querySelector('[data-action="removeFromFavorites"]').style.display = isFav ? 'block' : 'none';
        }
    });
    
    document.addEventListener('click', e => {
        if (!elements.contextMenu.contains(e.target)) {
            elements.contextMenu.classList.remove('context-menu--active');
        }
    });
    
    elements.contextMenu.addEventListener('click', e => {
        const item = e.target.closest('.context-menu__item');
        if (!item) return;
        
        const all = [...POPULAR_TRACKS, ...state.customTracks];
        const track = all.find(t => t.id == elements.contextMenu.dataset.trackId);
        const action = item.dataset.action;
        
        if (action === 'addToQueue') state.queue.push(track);
        else if (action === 'addToFavorites' || action === 'removeFromFavorites') toggleFavorite(track);
        
        elements.contextMenu.classList.remove('context-menu--active');
    });
    
    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT') return;
        
        if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
        else if (e.code === 'ArrowRight' && e.ctrlKey) nextTrack();
        else if (e.code === 'ArrowLeft' && e.ctrlKey) prevTrack();
        else if (e.code === 'ArrowUp' && e.altKey) setVolume(state.volume + 10);
        else if (e.code === 'ArrowDown' && e.altKey) setVolume(state.volume - 10);
        else if (e.code === 'KeyS') toggleShuffle();
        else if (e.code === 'KeyR') toggleRepeat();
    });
    
    // Library tabs
    document.querySelectorAll('.library-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('library-tab--active'));
            tab.classList.add('library-tab--active');
        });
    });
}

function saveToStorage() {
    try {
        localStorage.setItem('soundwave_data', JSON.stringify({
            volume: state.volume,
            favorites: state.favorites,
            playlists: state.playlists,
            repeat: state.repeat,
            shuffle: state.shuffle,
            customTracks: state.customTracks
        }));
    } catch (e) {}
}

function loadFromStorage() {
    try {
        const data = JSON.parse(localStorage.getItem('soundwave_data'));
        if (data) {
            state.volume = data.volume ?? 70;
            state.favorites = data.favorites ?? [];
            state.playlists = data.playlists ?? [];
            state.repeat = data.repeat ?? 'off';
            state.shuffle = data.shuffle ?? false;
            
            if (elements.shuffleBtn) elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
            if (elements.repeatBtn) elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
        }
    } catch (e) {}
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + s.toString().padStart(2, '0');
}

function formatPlays(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
}

document.addEventListener('DOMContentLoaded', init);