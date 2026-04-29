/**
 * SoundWave Music - Enhanced Version
 * With Visualizer, Animations, and Full Features
 */

// ================================
// Music Database
// ================================

const SAMPLE_ALBUMS = [
    { id: 1, title: 'Midnight Sessions', artist: 'The Night Owls', cover: 'https://picsum.photos/seed/album1/300/300', year: 2024, color: '#1a1a2e' },
    { id: 2, title: 'Summer Vibes', artist: 'Sunset Collective', cover: 'https://picsum.photos/seed/album2/300/300', year: 2024, color: '#ff6b35' },
    { id: 3, title: 'Electronic Dreams', artist: 'Synth Wave', cover: 'https://picsum.photos/seed/album3/300/300', year: 2023, color: '#7209b7' },
    { id: 4, title: 'Acoustic', artist: 'Guitar Stories', cover: 'https://picsum.photos/seed/album4/300/300', year: 2024, color: '#8b4513' },
    { id: 5, title: 'Hip-Hop Beats', artist: 'Urban Flow', cover: 'https://picsum.photos/seed/album5/300/300', year: 2024, color: '#2d5016' },
    { id: 6, title: 'Chill Out', artist: 'Lounge Masters', cover: 'https://picsum.photos/seed/album6/300/300', year: 2023, color: '#1e3d59' },
    { id: 7, title: 'Rock Anthems', artist: 'The Thunder', cover: 'https://picsum.photos/seed/album7/300/300', year: 2024, color: '#8b0000' },
    { id: 8, title: 'Jazz Nights', artist: 'Smooth Quartet', cover: 'https://picsum.photos/seed/album8/300/300', year: 2023, color: '#4a3728' }
];

const SAMPLE_TRACKS = [
    { id: 1, title: 'Midnight in Tokyo', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 234, cover: 'https://picsum.photos/seed/t1/100/100', genre: 'Electronic', bpm: 128, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', color: '#1a1a2e' },
    { id: 2, title: 'Neon Lights', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 198, cover: 'https://picsum.photos/seed/t2/100/100', genre: 'Electronic', bpm: 140, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', color: '#7209b7' },
    { id: 3, title: 'Summer Sunset', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 245, cover: 'https://picsum.photos/seed/t3/100/100', genre: 'Pop', bpm: 120, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', color: '#ff6b35' },
    { id: 4, title: 'Ocean Breeze', artist: 'Lounge Masters', album: 'Chill Out', duration: 267, cover: 'https://picsum.photos/seed/t4/100/100', genre: 'Ambient', bpm: 90, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', color: '#1e3d59' },
    { id: 5, title: 'Guitar Man', artist: 'Guitar Stories', album: 'Acoustic', duration: 189, cover: 'https://picsum.photos/seed/t5/100/100', genre: 'Acoustic', bpm: 100, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', color: '#8b4513' },
    { id: 6, title: 'Street Flow', artist: 'Urban Flow', album: 'Hip-Hop Beats', duration: 213, cover: 'https://picsum.photos/seed/t6/100/100', genre: 'Hip-Hop', bpm: 85, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', color: '#2d5016' },
    { id: 7, title: 'Thunder Road', artist: 'The Thunder', album: 'Rock Anthems', duration: 278, cover: 'https://picsum.photos/seed/t7/100/100', genre: 'Rock', bpm: 150, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', color: '#8b0000' },
    { id: 8, title: 'Smooth Jazz', artist: 'Smooth Quartet', album: 'Jazz Nights', duration: 302, cover: 'https://picsum.photos/seed/t8/100/100', genre: 'Jazz', bpm: 110, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', color: '#4a3728' },
    { id: 9, title: 'Digital Love', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 224, cover: 'https://picsum.photos/seed/t9/100/100', genre: 'Electronic', bpm: 135, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', color: '#7209b7' },
    { id: 10, title: 'Dancing in Rain', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 256, cover: 'https://picsum.photos/seed/t10/100/100', genre: 'Electronic', bpm: 125, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', color: '#1a1a2e' },
    { id: 11, title: 'Beach Party', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 198, cover: 'https://picsum.photos/seed/t11/100/100', genre: 'Pop', bpm: 128, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', color: '#ff6b35' },
    { id: 12, title: 'Mountain Echo', artist: 'Guitar Stories', album: 'Acoustic', duration: 234, cover: 'https://picsum.photos/seed/t12/100/100', genre: 'Acoustic', bpm: 95, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3', color: '#8b4513' },
    { id: 13, title: 'City Nights', artist: 'Urban Flow', album: 'Hip-Hop Beats', duration: 245, cover: 'https://picsum.photos/seed/t13/100/100', genre: 'Hip-Hop', bpm: 88, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', color: '#2d5016' },
    { id: 14, title: 'Calm Waters', artist: 'Lounge Masters', album: 'Chill Out', duration: 289, cover: 'https://picsum.photos/seed/t14/100/100', genre: 'Ambient', bpm: 75, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3', color: '#1e3d59' },
    { id: 15, title: 'Electric Storm', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 267, cover: 'https://picsum.photos/seed/t15/100/100', genre: 'Electronic', bpm: 145, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3', color: '#7209b7' },
    { id: 16, title: 'Fire and Rain', artist: 'The Thunder', album: 'Rock Anthems', duration: 312, cover: 'https://picsum.photos/seed/t16/100/100', genre: 'Rock', bpm: 155, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3', color: '#8b0000' },
    { id: 17, title: 'Moonlight Serenade', artist: 'Smooth Quartet', album: 'Jazz Nights', duration: 278, cover: 'https://picsum.photos/seed/t17/100/100', genre: 'Jazz', bpm: 105, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', color: '#4a3728' },
    { id: 18, title: 'Golden Hour', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 223, cover: 'https://picsum.photos/seed/t18/100/100', genre: 'Pop', bpm: 118, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', color: '#ff6b35' },
    { id: 19, title: 'Tokyo Nights', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 267, cover: 'https://picsum.photos/seed/t19/100/100', genre: 'Electronic', bpm: 130, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', color: '#1a1a2e' },
    { id: 20, title: 'Morning Coffee', artist: 'Lounge Masters', album: 'Chill Out', duration: 198, cover: 'https://picsum.photos/seed/t20/100/100', genre: 'Ambient', bpm: 80, audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', color: '#1e3d59' }
];

// ================================
// Application State
// ================================

const state = {
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
    bindEvents();
    renderAlbums();
    renderTracks(SAMPLE_TRACKS, 'recommendationsList', 'home');
    renderTracks(SAMPLE_TRACKS.slice(10), 'hitsList', 'home');
    renderPlaylists();
    setupAudio();
    updateVolumeUI();
    createVisualizer();
    initAnimations();
}

function cacheElements() {
    elements.audioPlayer = document.getElementById('audioPlayer');
    elements.mainContent = document.getElementById('mainContent');
    elements.albumsGrid = document.getElementById('albumsGrid');
    elements.recommendationsList = document.getElementById('recommendationsList');
    elements.hitsList = document.getElementById('hitsList');
    elements.searchResults = document.getElementById('searchResults');
    elements.libraryTracks = document.getElementById('libraryTracks');
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
    elements.progressHandle = document.getElementById('progressHandle');
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
    elements.playlistCover = document.getElementById('playlistCover');
    elements.playlistTrackCount = document.getElementById('playlistTrackCount');
    elements.playlistPlayBtn = document.getElementById('playlistPlayBtn');
    elements.createPlaylistModal = document.getElementById('createPlaylistModal');
    elements.closePlaylistModal = document.getElementById('closePlaylistModal');
    elements.playlistNameInput = document.getElementById('playlistNameInput');
    elements.savePlaylistBtn = document.getElementById('savePlaylistBtn');
    elements.contextMenu = document.getElementById('contextMenu');
    elements.playerTrackCover = document.querySelector('.player__track-cover');
}

// ================================
// Audio Setup with Web Audio API
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
    
    elements.audioPlayer.addEventListener('play', () => {
        state.isPlaying = true;
        updatePlayButton();
        startVisualizerAnimation();
    });
    
    elements.audioPlayer.addEventListener('pause', () => {
        state.isPlaying = false;
        updatePlayButton();
    });
    
    elements.audioPlayer.addEventListener('waiting', () => {
        state.isLoading = true;
        document.body.classList.add('loading');
    });
    
    elements.audioPlayer.addEventListener('canplay', () => {
        state.isLoading = false;
        document.body.classList.remove('loading');
    });
    
    elements.audioPlayer.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        state.isLoading = false;
        document.body.classList.remove('loading');
    });
}

// ================================
// Web Audio API Visualizer
// ================================

let analyser, dataArray, canvas, ctx;
let visualizerBars = [];

function createVisualizer() {
    const player = document.querySelector('.player');
    
    // Create visualizer container
    const visualizer = document.createElement('div');
    visualizer.className = 'visualizer';
    visualizer.innerHTML = Array(32).fill(0).map((_, i) => 
        `<div class="visualizer-bar" style="--delay: ${i * 0.02}s"></div>`
    ).join('');
    
    player.appendChild(visualizer);
}

function initAnimations() {
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${15 + Math.random() * 20}s;
        animation-delay: ${Math.random() * 10}s;
    `;
    document.body.appendChild(particle);
}

function startVisualizerAnimation() {
    if (!state.isPlaying) return;
    
    const bars = document.querySelectorAll('.visualizer-bar');
    bars.forEach((bar, i) => {
        if (state.isPlaying) {
            const height = 20 + Math.random() * 60;
            bar.style.height = height + '%';
            bar.style.animationDelay = (i * 0.05) + 's';
        }
    });
    
    requestAnimationFrame(startVisualizerAnimation);
}

function updateVisualizer() {
    if (!state.isPlaying) return;
    
    const bars = document.querySelectorAll('.visualizer-bar');
    bars.forEach((bar, i) => {
        const progress = state.progress / state.duration;
        const variation = Math.sin(progress * 10 + i * 0.5) * 0.3 + 0.7;
        const height = 20 * variation;
        bar.style.height = `${20 + height}%`;
    });
}

// ================================
// Track Playback
// ================================

function playTrack(track) {
    state.currentTrack = track;
    state.progress = 0;
    
    // Update color theme
    if (track.color) {
        state.currentColor = track.color;
        updateThemeColor(track.color);
    }
    
    // Update cover image
    if (elements.playerTrackCover && track.cover) {
        elements.playerTrackCover.src = track.cover;
    }
    
    renderCurrentTrack();
    addToRecentlyPlayed(track);
    
    // Load and play audio
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
        if (SAMPLE_TRACKS.length > 0) {
            playTrack(SAMPLE_TRACKS[0]);
            state.queue = [...SAMPLE_TRACKS];
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
    
    state.queueIndex = (state.queueIndex + 1) % state.queue.length;
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
    
    if (state.shuffle) {
        state.queue = shuffleArray([...SAMPLE_TRACKS]);
    } else {
        state.queue = [...SAMPLE_TRACKS];
    }
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

// ================================
// Volume Control
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
    
    const icon = elements.muteBtn.querySelector('.player__volume-icon');
    const iconMuted = elements.muteBtn.querySelector('.player__volume-icon-muted');
    
    if (state.isMuted || state.volume === 0) {
        icon.style.display = 'none';
        iconMuted.style.display = 'block';
    } else {
        icon.style.display = 'block';
        iconMuted.style.display = 'none';
    }
}

function updateProgressUI() {
    if (!state.duration) return;
    
    const pct = (state.progress / state.duration) * 100;
    elements.progressFill.style.width = pct + '%';
    elements.progressHandle.style.left = pct + '%';
    elements.currentTime.textContent = formatTime(state.progress);
}

// ================================
// Theme & Colors
// ================================

function updateThemeColor(color) {
    document.documentElement.style.setProperty('--current-color', color);
    document.body.classList.add('color-change');
    setTimeout(() => document.body.classList.remove('color-change'), 500);
}

// ================================
// Favorites
// ================================

function toggleFavorite(track) {
    const idx = state.favorites.findIndex(t => t.id === track.id);
    if (idx === -1) {
        state.favorites.push(track);
    } else {
        state.favorites.splice(idx, 1);
    }
    updateFavButton();
    renderTracks(state.favorites, 'libraryTracks', 'library');
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
// Playlists
// ================================

function createPlaylist(name) {
    state.playlists.push({ id: Date.now(), name, tracks: [] });
    renderPlaylists();
    saveToStorage();
}

function openPlaylist(id) {
    const playlist = state.playlists.find(p => p.id === id);
    if (!playlist) return;
    
    state.currentView = 'playlist';
    state.currentPlaylistId = id;
    elements.playlistName.textContent = playlist.name;
    elements.playlistTrackCount.textContent = playlist.tracks.length;
    renderTracks(playlist.tracks, 'playlistTracks', 'playlist');
    showPage('playlist');
}

// ================================
// Recently Played
// ================================

function addToRecentlyPlayed(track) {
    state.recentlyPlayed = state.recentlyPlayed.filter(t => t.id !== track.id);
    state.recentlyPlayed.unshift(track);
    state.recentlyPlayed = state.recentlyPlayed.slice(0, 20);
    saveToStorage();
}

// ================================
// Search
// ================================

function search(query) {
    if (!query) {
        elements.searchResults.innerHTML = '';
        return;
    }
    
    const q = query.toLowerCase();
    const results = SAMPLE_TRACKS.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        t.album.toLowerCase().includes(q)
    );
    renderTracks(results, 'searchResults', 'search');
}

// ================================
// Navigation
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
// Rendering
// ================================

function renderAlbums() {
    const html = SAMPLE_ALBUMS.map(album => `
        <div class="album-card" data-album="${album.id}" style="--album-color: ${album.color || '#fc0'}">
            <div class="album-card__cover">
                <img src="${album.cover}" alt="${album.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="album-card__cover-placeholder" style="display:none">
                    <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2"/></svg>
                </div>
                <button class="album-card__play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
            </div>
            <div class="album-card__title">${album.title}</div>
            <div class="album-card__artist">${album.artist}</div>
        </div>
    `).join('');
    
    elements.albumsGrid.innerHTML = html;
}

function renderTracks(tracks, containerId, view) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (tracks.length === 0) {
        container.innerHTML = '<div class="search-empty"><p>Ничего не найдено</p></div>';
        return;
    }
    
    const html = tracks.map((track, idx) => {
        const isPlaying = state.currentTrack && state.currentTrack.id === track.id;
        const isFav = isFavorite(track);
        
        return `
        <div class="track-row ${isPlaying ? 'track-row--playing' : ''}" data-track-id="${track.id}" data-album-color="${track.color || '#fc0'}">
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
    
    elements.userPlaylists.innerHTML = html;
}

function renderQueue() {
    if (state.queue.length === 0) {
        elements.queueList.innerHTML = '<div class="queue-modal__empty"><p>Очередь пуста</p></div>';
        return;
    }
    
    const html = state.queue.map((track, idx) => `
        <div class="queue-modal__item" data-index="${idx}">
            <div class="queue-modal__item-cover" style="background-color: ${track.color || '#333'}"></div>
            <div class="queue-modal__item-info">
                <div class="queue-modal__item-title">${track.title}</div>
                <div class="queue-modal__item-artist">${track.artist}</div>
            </div>
            <button class="queue-modal__item-remove" data-action="remove-queue">✕</button>
        </div>
    `).join('');
    
    elements.queueList.innerHTML = html;
}

function renderCurrentTrack() {
    if (!state.currentTrack) return;
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
// Event Binding
// ================================

function bindEvents() {
    // Navigation
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });
    
    // Sidebar
    elements.playlistList.addEventListener('click', e => {
        const item = e.target.closest('.sidebar__item');
        if (!item) return;
        const playlist = item.dataset.playlist;
        
        if (playlist === 'all') {
            showPage('home');
        } else if (playlist === 'favorites') {
            renderTracks(state.favorites, 'playlistTracks', 'playlist');
            elements.playlistName.textContent = 'Избранное';
            elements.playlistTrackCount.textContent = state.favorites.length;
            showPage('playlist');
        } else if (playlist === 'recent') {
            renderTracks(state.recentlyPlayed, 'playlistTracks', 'playlist');
            elements.playlistName.textContent = 'Недавно';
            elements.playlistTrackCount.textContent = state.recentlyPlayed.length;
            showPage('playlist');
        }
    });
    
    // User playlists
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
    
    // Volume
    elements.volumeBar.addEventListener('click', e => {
        const rect = elements.volumeBar.getBoundingClientRect();
        setVolume(((e.clientX - rect.left) / rect.width) * 100);
    });
    
    // Progress
    elements.progressBar.addEventListener('click', e => {
        if (!state.duration) return;
        const rect = elements.progressBar.getBoundingClientRect();
        elements.audioPlayer.currentTime = ((e.clientX - rect.left) / rect.width) * state.duration;
    });
    
    // Favorites
    elements.favBtn.addEventListener('click', () => {
        if (state.currentTrack) toggleFavorite(state.currentTrack);
    });
    
    // Queue
    elements.queueBtn.addEventListener('click', () => {
        elements.queueModal.classList.toggle('queue-modal--active');
    });
    elements.queueModalClose.addEventListener('click', () => {
        elements.queueModal.classList.remove('queue-modal--active');
    });
    
    elements.queueList.addEventListener('click', e => {
        const removeBtn = e.target.closest('[data-action="remove-queue"]');
        if (removeBtn) {
            const idx = parseInt(removeBtn.closest('.queue-modal__item').dataset.index);
            state.queue.splice(idx, 1);
            renderQueue();
            return;
        }
        
        const item = e.target.closest('.queue-modal__item');
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
    
    // Playlist play button
    elements.playlistPlayBtn.addEventListener('click', () => {
        const tracks = [...document.querySelectorAll('#playlistTracks .track-row')].map(
            r => SAMPLE_TRACKS.find(t => t.id == r.dataset.trackId)
        ).filter(Boolean);
        
        if (tracks.length > 0) {
            state.queue = tracks;
            state.queueIndex = 0;
            playTrack(tracks[0]);
        }
    });
    
    // Track clicks
    document.addEventListener('click', e => {
        // Album play
        const albumPlay = e.target.closest('.album-card__play');
        if (albumPlay) {
            const card = albumPlay.closest('.album-card');
            playTrack(SAMPLE_TRACKS[parseInt(card.dataset.album) - 1]);
            return;
        }
        
        // Track row
        const trackRow = e.target.closest('.track-row');
        if (trackRow && !e.target.closest('.track-row__action')) {
            const track = SAMPLE_TRACKS.find(t => t.id == trackRow.dataset.trackId);
            if (track) {
                const container = trackRow.closest('.tracks-list');
                const allTracks = [...container.querySelectorAll('.track-row')].map(
                    r => SAMPLE_TRACKS.find(t => t.id == r.dataset.trackId)
                ).filter(Boolean);
                
                state.queue = allTracks;
                state.queueIndex = allTracks.findIndex(t => t.id === track.id);
                playTrack(track);
            }
        }
        
        // Track actions
        const actionBtn = e.target.closest('.track-row__action');
        if (actionBtn) {
            e.stopPropagation();
            const trackId = actionBtn.closest('.track-row').dataset.trackId;
            const track = SAMPLE_TRACKS.find(t => t.id == trackId);
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
            
            const track = SAMPLE_TRACKS.find(t => t.id == trackRow.dataset.trackId);
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
        
        const track = SAMPLE_TRACKS.find(t => t.id == elements.contextMenu.dataset.trackId);
        const action = item.dataset.action;
        
        if (action === 'addToQueue') state.queue.push(track);
        else if (action === 'addToFavorites' || action === 'removeFromFavorites') toggleFavorite(track);
        
        elements.contextMenu.classList.remove('context-menu--active');
    });
    
    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT') return;
        
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight' && e.ctrlKey) {
            nextTrack();
        } else if (e.code === 'ArrowLeft' && e.ctrlKey) {
            prevTrack();
        } else if (e.code === 'ArrowUp' && e.altKey) {
            setVolume(state.volume + 10);
        } else if (e.code === 'ArrowDown' && e.altKey) {
            setVolume(state.volume - 10);
        } else if (e.code === 'KeyS') {
            toggleShuffle();
        } else if (e.code === 'KeyR') {
            toggleRepeat();
        }
    });
    
    // Library tabs
    document.querySelectorAll('.library-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('library-tab--active'));
            tab.classList.add('library-tab--active');
        });
    });
}

// ================================
// Storage
// ================================

function saveToStorage() {
    try {
        localStorage.setItem('soundwave_data', JSON.stringify({
            volume: state.volume,
            favorites: state.favorites,
            playlists: state.playlists,
            recentlyPlayed: state.recentlyPlayed,
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
            state.recentlyPlayed = data.recentlyPlayed ?? [];
            state.repeat = data.repeat ?? 'off';
            state.shuffle = data.shuffle ?? false;
            
            elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
            elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
        }
    } catch (e) {}
}

// ================================
// Utilities
// ================================

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + s.toString().padStart(2, '0');
}

function shuffleArray(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ================================
// Initialize
// ================================

document.addEventListener('DOMContentLoaded', init);