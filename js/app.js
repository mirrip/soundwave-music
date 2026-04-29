/**
 * SoundWave Music - UNLIMITED Version
 * Uses free samples from internet
 */

// ================================
// MUSIC DATABASE - 20 REAL SONGS + GENERATED VARIANTS
// ================================

const ARTISTS = [
    'The Night Owls', 'Synth Master', 'Beach Boys', 'Nature Sounds', 'Acoustic Soul',
    'Urban Beat', 'Rock Legends', 'Jazz Ensemble', 'DJ Max', 'Lo-Fi Beats',
    'Thunder', 'Folk Song', 'Night Owl', 'Dubstep King', 'Hot Band',
    'Piano Man', 'Island Music', 'Soul Singer', 'Space Sound', 'Chill Collective'
];

const GENRES = ['Electronic', 'Pop', 'Ambient', 'Acoustic', 'Hip-Hop', 'Rock', 'Jazz', 'EDM', 'Lo-Fi', 'Folk', 'R&B', 'Dubstep', 'Classical', 'Reggae', 'Blues'];

const ALBUMS = [
    'Electronic Nights', 'Neon Collection', 'Summer Vibes', 'Relaxation', 'Unplugged',
    'Hip-Hop Classic', 'Rock Anthems', 'Jazz Nights', 'Club Hits', 'Study Session',
    'EDM Masters', 'Acoustic Journey', 'Urban Tales', 'Heavy Bass', 'Rock Fire'
];

// Generate unique tracks from base samples
function generateTracks() {
    const tracks = [];
    const baseUrls = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
    ];
    
    const titles = [
        'Midnight Tokyo', 'Neon Dreams', 'Summer Sunset', 'Ocean Waves', 'Guitar Stories',
        'Street Flow', 'Thunder Road', 'Smooth Jazz', 'Digital Love', 'Dance Revolution',
        'Chill Mode', 'Electric Storm', 'Mountain High', 'City Lights', 'Bass Drop',
        'Fire Flame', 'Moonlight Serenade', 'Tropical Vibes', 'Midnight Blues', 'Cosmic Journey',
        'Rainy Night', 'Desert Wind', 'Forest Walk', 'Ocean Deep', 'Sky High',
        'Heart Beat', 'Night Drive', 'Sunrise', 'Starlight', 'Dreams'
    ];
    
    // Generate 100 tracks
    for (let i = 0; i < 100; i++) {
        const titleIdx = i % titles.length;
        const artistIdx = i % ARTISTS.length;
        const albumIdx = i % ALBUMS.length;
        const genreIdx = i % GENRES.length;
        const urlIdx = i % baseUrls.length;
        
        tracks.push({
            id: i + 1,
            title: titles[titleIdx] + (i >= 20 ? ' ' + (Math.floor(i / 20) + 1) : ''),
            artist: ARTISTS[artistIdx],
            album: ALBUMS[albumIdx],
            duration: 120 + Math.floor(Math.random() * 180),
            cover: `https://picsum.photos/seed/sw${i}/200/200`,
            genre: GENRES[genreIdx],
            bpm: 60 + Math.floor(Math.random() * 100),
            audioUrl: baseUrls[urlIdx],
            color: GENRES[genreIdx] === 'Electronic' ? '#6366f1' :
                  GENRES[genreIdx] === 'Pop' ? '#f59e0b' :
                  GENRES[genreIdx] === 'Rock' ? '#dc2626' :
                  GENRES[genreIdx] === 'Jazz' ? '#7c2d12' :
                  GENRES[genreIdx] === 'Ambient' ? '#0d9488' :
                  GENRES[genreIdx] === 'Hip-Hop' ? '#166534' :
                  GENRES[genreIdx] === 'EDM' ? '#ec4899' :
                  GENRES[genreIdx] === 'Lo-Fi' ? '#14b8a6' : '#8b5cf6'
        });
    }
    
    return tracks;
}

// Initialize global tracks
const ALL_TRACKS = generateTracks();

// ================================
// APP STATE
// ================================

let state = {
    currentTrack: null,
    isPlaying: false,
    queue: [...ALL_TRACKS],
    queueIndex: 0,
    shuffle: false,
    repeat: 'off',
    volume: 70,
    isMuted: false,
    progress: 0,
    duration: 0,
    favorites: [],
    playlists: [],
    customTracks: [],
    myWave: [],
    currentView: 'home'
};

const elements = {};

// ================================
// INIT
// ================================

function init() {
    console.log('🎵 SoundWave UNLIMITED initialized with ' + ALL_TRACKS.length + ' tracks');
    cacheElements();
    loadFromStorage();
    bindEvents();
    renderAlbums();
    renderTracks(ALL_TRACKS, 'forYou');
    renderTracks(ALL_TRACKS.slice(0, 20), 'hitsList');
    renderTracks(ALL_TRACKS, 'allTracks');
    renderPlaylists();
    setupAudio();
    updateVolumeUI();
    createVisualizer();
    renderMyWave();
}

function cacheElements() {
    elements.audioPlayer = document.getElementById('audioPlayer');
    elements.forYou = document.getElementById('forYou');
    elements.allTracks = document.getElementById('allTracks');
    elements.hitsList = document.getElementById('hitsList');
    elements.myWaveList = document.getElementById('myWaveList');
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
    elements.dropZone = document.getElementById('dropZone');
    elements.fileInput = document.getElementById('fileInput');
}

// ================================
// AUDIO
// ================================

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
    elements.audioPlayer.addEventListener('waiting', () => document.body.classList.add('loading'));
    elements.audioPlayer.addEventListener('canplay', () => document.body.classList.remove('loading'));
}

// ================================
// PLAYBACK
// ================================

function playTrack(track) {
    state.currentTrack = track;
    state.progress = 0;
    
    if (track.color) {
        document.documentElement.style.setProperty('--current-color', track.color);
    }
    
    if (elements.playerTrackCover && track.cover) {
        elements.playerTrackCover.src = track.cover;
    }
    
    renderCurrentTrack();
    addToMyWave(track);
    
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
        if (state.queue.length > 0) {
            playTrack(state.queue[0]);
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
    state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
    playTrack(state.queue[state.queueIndex]);
}

function toggleShuffle() {
    state.shuffle = !state.shuffle;
    elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
    saveToStorage();
}

function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    state.repeat = modes[(modes.indexOf(state.repeat) + 1) % modes.length];
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

// ================================
// MY WAVE
// ================================

function addToMyWave(track) {
    let wave = JSON.parse(localStorage.getItem('myWave') || '[]');
    const existing = wave.find(t => t.id === track.id);
    if (existing) {
        existing.playCount = (existing.playCount || 0) + 1;
    } else {
        wave.push({ ...track, playCount: 1 });
    }
    wave = wave.sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
    localStorage.setItem('myWave', JSON.stringify(wave));
    state.myWave = wave;
}

function renderMyWave() {
    const wave = JSON.parse(localStorage.getItem('myWave') || '[]');
    if (elements.myWaveList) {
        if (wave.length === 0) {
            elements.myWaveList.innerHTML = '<div class="empty-state"><p>Слушай музыку - она появится здесь!</p></div>';
        } else {
            renderTracks(wave.slice(0, 30), 'myWaveList');
        }
    }
}

// ================================
// VOLUME & PROGRESS
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
// FAVORITES
// ================================

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

function isFavorite(track) {
    return state.favorites.some(t => t.id === track.id);
}

function updateFavButton() {
    if (!state.currentTrack) return;
    elements.favBtn.classList.toggle('player__track-fav--active', isFavorite(state.currentTrack));
}

// ================================
// PLAYLISTS
// ================================

function createPlaylist(name) {
    state.playlists.push({ id: Date.now(), name, tracks: [] });
    renderPlaylists();
    saveToStorage();
}

function openPlaylist(id) {
    const playlist = state.playlists.find(p => p.id === id);
    if (!playlist) return;
    elements.playlistName.textContent = playlist.name;
    renderTracks(playlist.tracks, 'playlistTracks');
    showPage('playlist');
}

// ================================
// SEARCH
// ================================

function search(query) {
    if (!query) {
        if (elements.searchResults) elements.searchResults.innerHTML = '';
        return;
    }
    const q = query.toLowerCase();
    
    // Search in unlimited tracks
    const results = ALL_TRACKS.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        t.genre.toLowerCase().includes(q) ||
        t.album.toLowerCase().includes(q)
    );
    
    renderTracks(results, 'searchResults');
}

// ================================
// NAV
// ================================

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
    document.querySelectorAll('.header__nav-link').forEach(l => l.classList.remove('header__nav-link--active'));
    
    const pageEl = document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1));
    const navLink = document.querySelector('.header__nav-link[data-page="' + page + '"]');
    
    if (pageEl) pageEl.classList.add('page--active');
    if (navLink) navLink.classList.add('header__nav-link--active');
    state.currentView = page;
}

// ================================
// RENDER
// ================================

function renderAlbums() {
    const albums = ALL_TRACKS.slice(0, 8).map((track, idx) => {
        const albumName = [...new Set(ALL_TRACKS.filter(t => t.album === track.album).map(t => t.album))][idx % 8];
        return `
            <div class="album-card" data-album="${track.id}" style="--album-color: ${track.color}">
                <div class="album-card__cover">
                    <img src="${track.cover}" alt="${track.title}" onerror="this.style.display='none'">
                    <button class="album-card__play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
                </div>
                <div class="album-card__title">${albumName}</div>
                <div class="album-card__artist">${track.artist}</div>
            </div>
        `;
    }).join('');
    
    if (elements.albumsGrid) elements.albumsGrid.innerHTML = albums;
}

function renderTracks(tracks, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (tracks.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Ничего не найдено</p></div>';
        return;
    }
    
    const html = tracks.slice(0, 50).map((track, idx) => {
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
            <div class="track-row__genre">${track.genre}</div>
            <div class="track-row__duration">${formatTime(track.duration)}</div>
            <div class="track-row__actions">
                <button class="track-row__action ${isFav ? 'track-row__action--active' : ''}" data-action="fav">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${isFav ? 'currentColor' : 'none'}"/></svg>
                </button>
                <button class="track-row__action" data-action="queue">
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

// ================================
// VISUALIZER & PARTICLES
// ================================

function createVisualizer() {
    const player = document.querySelector('.player');
    if (!player) return;
    
    const visualizer = document.createElement('div');
    visualizer.className = 'visualizer';
    visualizer.innerHTML = Array(32).fill(0).map((_, i) => 
        '<div class="visualizer-bar"></div>'
    ).join('');
    
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
// EVENTS
// ================================

function bindEvents() {
    // Nav
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', e => { e.preventDefault(); showPage(link.dataset.page); });
    });
    
    // Sidebar
    document.getElementById('playlistList').addEventListener('click', e => {
        const item = e.target.closest('.sidebar__item');
        if (!item) return;
        
        const p = item.dataset.playlist;
        
        if (p === 'all') {
            renderTracks(ALL_TRACKS, 'playlistTracks');
            elements.playlistName.textContent = 'Все треки';
            showPage('playlist');
        } else if (p === 'favorites') {
            renderTracks(state.favorites, 'playlistTracks');
            elements.playlistName.textContent = 'Избранное';
            showPage('playlist');
        } else if (p === 'wave') {
            renderMyWave();
            showPage('wave');
        } else if (p === 'authors') {
            showPage('authors');
        } else if (p === 'recent') {
            const recent = JSON.parse(localStorage.getItem('playHistory') || '[]');
            renderTracks(recent, 'playlistTracks');
            elements.playlistName.textContent = 'Недавно';
            showPage('playlist');
        }
    });
    
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
    
    elements.favBtn.addEventListener('click', () => { if (state.currentTrack) toggleFavorite(state.currentTrack); });
    
    const myWaveBtn = document.getElementById('myWaveBtn');
    if (myWaveBtn) myWaveBtn.addEventListener('click', () => {
        if (state.currentTrack) {
            const similar = ALL_TRACKS.filter(t => t.id !== state.currentTrack.id && (t.genre === state.currentTrack.genre || Math.abs(t.bpm - state.currentTrack.bpm) < 20)).slice(0, 15);
            state.queue = similar;
            state.queueIndex = 0;
            if (similar.length > 0) playTrack(similar[0]);
        }
    });
    
    // Queue
    elements.queueBtn.addEventListener('click', () => elements.queueModal.classList.toggle('queue-modal--active'));
    elements.queueModalClose.addEventListener('click', () => elements.queueModal.classList.remove('queue-modal--active'));
    
    elements.queueList.addEventListener('click', e => {
        if (e.target.closest('[data-action="remove"]')) {
            const idx = parseInt(e.target.closest('.queue-item').dataset.index);
            state.queue.splice(idx, 1);
            renderQueue();
        } else if (e.target.closest('.queue-item')) {
            playTrack(state.queue[parseInt(e.target.closest('.queue-item').dataset.index)]);
        }
    });
    
    // Create playlist
    document.querySelector('.sidebar__create-btn').addEventListener('click', () => {
        elements.createPlaylistModal.classList.add('modal--active');
        elements.playlistNameInput.focus();
    });
    
    elements.closePlaylistModal.addEventListener('click', () => elements.createPlaylistModal.classList.remove('modal--active'));
    
    elements.savePlaylistBtn.addEventListener('click', () => {
        const name = elements.playlistNameInput.value.trim();
        if (name) {
            createPlaylist(name);
            elements.playlistNameInput.value = '';
            elements.createPlaylistModal.classList.remove('modal--active');
        }
    });
    
    elements.createPlaylistModal.addEventListener('click', e => {
        if (e.target === elements.createPlaylistModal) elements.createPlaylistModal.classList.remove('modal--active');
    });
    
    elements.playlistPlayBtn.addEventListener('click', () => {
        const tracks = [...document.querySelectorAll('#playlistTracks .track-row')].map(r => ALL_TRACKS.find(t => t.id == r.dataset.trackId)).filter(Boolean);
        if (tracks.length > 0) { state.queue = tracks; state.queueIndex = 0; playTrack(tracks[0]); }
    });
    
    // Track clicks
    document.addEventListener('click', e => {
        const albumPlay = e.target.closest('.album-card__play');
        if (albumPlay) { playTrack(ALL_TRACKS[Math.floor(Math.random() * ALL_TRACKS.length)]); return; }
        
        const trackRow = e.target.closest('.track-row');
        if (trackRow && !e.target.closest('.track-row__action')) {
            const track = ALL_TRACKS.find(t => t.id == trackRow.dataset.trackId);
            if (track) {
                const container = trackRow.closest('.tracks-list');
                if (container) {
                    const rows = container.querySelectorAll('.track-row');
                    state.queue = [...rows].map(r => ALL_TRACKS.find(t => t.id == r.dataset.trackId)).filter(Boolean);
                }
                state.queueIndex = state.queue.findIndex(t => t.id === track.id);
                playTrack(track);
            }
        }
        
        const actionBtn = e.target.closest('.track-row__action');
        if (actionBtn) {
            e.stopPropagation();
            const track = ALL_TRACKS.find(t => t.id == actionBtn.closest('.track-row').dataset.trackId);
            if (actionBtn.dataset.action === 'fav') { toggleFavorite(track); actionBtn.classList.toggle('track-row__action--active'); }
            else if (actionBtn.dataset.action === 'queue') { state.queue.push(track); renderQueue(); }
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
            
            const track = ALL_TRACKS.find(t => t.id == trackRow.dataset.trackId);
            const isFav = isFavorite(track);
            document.querySelector('[data-action="addToFavorites"]').style.display = isFav ? 'none' : 'block';
            document.querySelector('[data-action="removeFromFavorites"]').style.display = isFav ? 'block' : 'none';
        }
    });
    
    document.addEventListener('click', e => { if (!elements.contextMenu.contains(e.target)) elements.contextMenu.classList.remove('context-menu--active'); });
    
    elements.contextMenu.addEventListener('click', e => {
        const item = e.target.closest('.context-menu__item');
        if (!item) return;
        
        const track = ALL_TRACKS.find(t => t.id == elements.contextMenu.dataset.trackId);
        if (item.dataset.action === 'addToQueue') state.queue.push(track);
        else if (item.dataset.action === 'addToFavorites' || item.dataset.action === 'removeFromFavorites') toggleFavorite(track);
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
    
    // Upload
    if (elements.dropZone && elements.fileInput) {
        elements.dropZone.addEventListener('dragover', e => { e.preventDefault(); elements.dropZone.classList.add('drag-over'); });
        elements.dropZone.addEventListener('dragleave', () => elements.dropZone.classList.remove('drag-over'));
        elements.dropZone.addEventListener('drop', e => {
            e.preventDefault();
            elements.dropZone.classList.remove('drag-over');
            // Handle file upload
        });
        elements.fileInput.addEventListener('change', e => {
            // Handle file selection
        });
    }
}

// ================================
// STORAGE
// ================================

function saveToStorage() {
    try {
        localStorage.setItem('soundwave_data', JSON.stringify({
            volume: state.volume,
            favorites: state.favorites,
            playlists: state.playlists,
            repeat: state.repeat,
            shuffle: state.shuffle
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
// INIT
// ================================

document.addEventListener('DOMContentLoaded', init);