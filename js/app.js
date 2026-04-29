/**
 * SoundWave Music - Main Application
 * A Yandex Music clone with full functionality
 */

// ================================
// Sample Tracks (with real audio URLs)
// ================================

const SAMPLE_TRACKS = [
    { id: 1, title: 'Midnight in Tokyo', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 234, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 2, title: 'Neon Lights', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 198, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 3, title: 'Summer Sunset', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 245, cover: null, genre: 'Pop', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { id: 4, title: 'Ocean Breeze', artist: 'Lounge Masters', album: 'Chill Out', duration: 267, cover: null, genre: 'Ambient', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { id: 5, title: 'Guitar Man', artist: 'Guitar Stories', album: 'Acoustic', duration: 189, cover: null, genre: 'Acoustic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
    { id: 6, title: 'Street Flow', artist: 'Urban Flow', album: 'Hip-Hop Beats', duration: 213, cover: null, genre: 'Hip-Hop', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    { id: 7, title: 'Thunder Road', artist: 'The Thunder', album: 'Rock Anthems', duration: 278, cover: null, genre: 'Rock', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
    { id: 8, title: 'Smooth Jazz', artist: 'Smooth Quartet', album: 'Jazz Nights', duration: 302, cover: null, genre: 'Jazz', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    { id: 9, title: 'Digital Love', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 224, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
    { id: 10, title: 'Dancing in Rain', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 256, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
    { id: 11, title: 'Beach Party', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 198, cover: null, genre: 'Pop', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
    { id: 12, title: 'Mountain Echo', artist: 'Guitar Stories', album: 'Acoustic', duration: 234, cover: null, genre: 'Acoustic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
    { id: 13, title: 'City Nights', artist: 'Urban Flow', album: 'Hip-Hop Beats', duration: 245, cover: null, genre: 'Hip-Hop', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
    { id: 14, title: 'Calm Waters', artist: 'Lounge Masters', album: 'Chill Out', duration: 289, cover: null, genre: 'Ambient', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
    { id: 15, title: 'Electric Storm', artist: 'Synth Wave', album: 'Electronic Dreams', duration: 267, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
    { id: 16, title: 'Fire and Rain', artist: 'The Thunder', album: 'Rock Anthems', duration: 312, cover: null, genre: 'Rock', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
    { id: 17, title: 'Moonlight Serenade', artist: 'Smooth Quartet', album: 'Jazz Nights', duration: 278, cover: null, genre: 'Jazz', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 18, title: 'Golden Hour', artist: 'Sunset Collective', album: 'Summer Vibes', duration: 223, cover: null, genre: 'Pop', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 19, title: 'Tokyo Nights', artist: 'The Night Owls', album: 'Midnight Sessions', duration: 267, cover: null, genre: 'Electronic', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { id: 20, title: 'Morning Coffee', artist: 'Lounge Masters', album: 'Chill Out', duration: 198, cover: null, genre: 'Ambient', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
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
    repeat: 'off', // off, all, one
    volume: 70,
    isMuted: false,
    progress: 0,
    favorites: [],
    playlists: [],
    recentlyPlayed: [],
    currentView: 'home', // home, search, library, playlist
    currentPlaylistId: null,
    searchQuery: '',
    audioContext: null,
    audioElement: null
};

// ================================
// DOM Elements
// ================================

const elements = {};

// Initialize app
function init() {
    cacheElements();
    loadFromStorage();
    bindEvents();
    renderAlbums();
    renderTracks(SAMPLE_TRACKS, 'recommendationsList');
    renderTracks(SAMPLE_TRACKS.slice(10), 'hitsList');
    renderPlaylists();
    setupAudio();
    updateVolumeUI();
}

// Cache DOM elements
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
    
    // Player elements
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
    elements.volumeHandle = document.getElementById('volumeHandle');
    elements.muteBtn = document.getElementById('muteBtn');
    elements.favBtn = document.getElementById('favBtn');
    elements.qualityBadge = document.getElementById('qualityBadge');
    elements.queueBtn = document.getElementById('queueBtn');
    elements.queueModal = document.getElementById('queueModal');
    elements.queueModalClose = document.getElementById('queueModalClose');
    
    // Playlist elements
    elements.playlistName = document.getElementById('playlistName');
    elements.playlistCover = document.getElementById('playlistCover');
    elements.playlistTrackCount = document.getElementById('playlistTrackCount');
    elements.playlistPlayBtn = document.getElementById('playlistPlayBtn');
    
    // Modals
    elements.createPlaylistModal = document.getElementById('createPlaylistModal');
    elements.closePlaylistModal = document.getElementById('closePlaylistModal');
    elements.playlistNameInput = document.getElementById('playlistNameInput');
    elements.savePlaylistBtn = document.getElementById('savePlaylistBtn');
    
    // Context menu
    elements.contextMenu = document.getElementById('contextMenu');
}

// ================================
// Audio Setup
// ================================

function setupAudio() {
    elements.audioElement = elements.audioPlayer;
    elements.audioPlayer.volume = state.volume / 100;
    
    // Audio events
    elements.audioPlayer.addEventListener('timeupdate', updateProgress);
    elements.audioPlayer.addEventListener('ended', handleTrackEnd);
    elements.audioPlayer.addEventListener('loadedmetadata', () => {
        elements.totalTime.textContent = formatTime(elements.audioPlayer.duration);
    });
    
    // Audio loading events for visual feedback
    elements.audioPlayer.addEventListener('waiting', () => {
        showLoadingIndicator(true);
    });
    
    elements.audioPlayer.addEventListener('playing', () => {
        showLoadingIndicator(false);
    });
    
    elements.audioPlayer.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        showLoadingIndicator(false);
    });
}

let loadingIndicator = null;

let progressInterval = null;

function showLoadingIndicator(show) {
    if (!state.currentTrack) return;
    
    const trackRow = document.querySelector(`.track-row[data-track-id="${state.currentTrack.id}"]`);
    if (!trackRow) return;
    
    if (show) {
        trackRow.classList.add('track-row--loading');
    } else {
        trackRow.classList.remove('track-row--loading');
    }
}

function startProgressSimulation() {
    if (progressInterval) clearInterval(progressInterval);
    
    const totalDuration = state.currentTrack ? state.currentTrack.duration : 180;
    state.progress = 0;
    
    progressInterval = setInterval(() => {
        if (state.isPlaying && state.currentTrack && elements.audioPlayer.paused) {
            state.progress += 1;
            
            if (state.progress >= totalDuration) {
                handleTrackEnd();
                return;
            }
            
            updateProgressUI();
        }
    }, 1000);
}

function stopProgressSimulation() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

function updateProgress() {
    // For real audio files
    if (elements.audioPlayer.duration) {
        state.progress = elements.audioPlayer.currentTime;
        updateProgressUI();
    }
}

function handleTrackEnd() {
    stopProgressSimulation();
    
    if (state.repeat === 'one') {
        state.progress = 0;
        simulatePlay();
    } else if (state.repeat === 'all' || state.queueIndex < state.queue.length - 1) {
        nextTrack();
    } else {
        state.isPlaying = false;
        updatePlayButton();
    }
}

function updateProgressUI() {
    if (!state.currentTrack) return;
    
    const totalDuration = state.currentTrack.duration;
    const percentage = (state.progress / totalDuration) * 100;
    
    elements.progressFill.style.width = `${percentage}%`;
    elements.progressHandle.style.left = `${percentage}%`;
    elements.currentTime.textContent = formatTime(state.progress);
    elements.totalTime.textContent = formatTime(totalDuration);
}

// ================================
// Track Playback
// ================================

function playTrack(track) {
    state.currentTrack = track;
    state.progress = 0;
    
    // Update player UI
    renderCurrentTrack();
    
    // Add to recently played
    addToRecentlyPlayed(track);
    
    // Load and play real audio
    if (track.audioUrl) {
        elements.audioPlayer.src = track.audioUrl;
        elements.audioPlayer.play().catch(e => {
            console.error('Playback error:', e);
        });
    }
    
    // Start playback
    state.isPlaying = true;
    updatePlayButton();
    startProgressSimulation();
    
    // Update UI
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
        state.isPlaying = false;
    } else {
        if (elements.audioPlayer.src) {
            elements.audioPlayer.play().catch(e => console.error('Play error:', e));
        }
        state.isPlaying = true;
    }
    updatePlayButton();
}

function nextTrack() {
    if (state.queue.length === 0) return;
    
    state.queueIndex++;
    
    if (state.queueIndex >= state.queue.length) {
        if (state.repeat === 'all') {
            state.queueIndex = 0;
        } else {
            state.isPlaying = false;
            updatePlayButton();
            return;
        }
    }
    
    const nextTrack = state.queue[state.queueIndex];
    playTrack(nextTrack);
}

function prevTrack() {
    if (state.queue.length === 0) return;
    
    // If more than 3 seconds played, restart track
    if (state.progress > 3) {
        state.progress = 0;
        updateProgressUI();
        return;
    }
    
    state.queueIndex--;
    
    if (state.queueIndex < 0) {
        if (state.repeat === 'all') {
            state.queueIndex = state.queue.length - 1;
        } else {
            state.queueIndex = 0;
        }
    }
    
    const prevTrack = state.queue[state.queueIndex];
    playTrack(prevTrack);
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
    const currentIndex = modes.indexOf(state.repeat);
    state.repeat = modes[(currentIndex + 1) % modes.length];
    
    elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
    elements.repeatBtn.classList.toggle('player__btn--repeat-1', state.repeat === 'one');
    elements.repeatMode.textContent = state.repeat === 'one' ? '1' : '';
    
    saveToStorage();
}

function addToQueue(track) {
    if (!state.queue.includes(track)) {
        state.queue.push(track);
    }
    renderQueue();
    saveToStorage();
}

function removeFromQueue(index) {
    state.queue.splice(index, 1);
    if (index < state.queueIndex) {
        state.queueIndex--;
    }
    renderQueue();
    saveToStorage();
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
    const fillPercent = state.isMuted ? 0 : state.volume;
    elements.volumeFill.style.width = `${fillPercent}%`;
    
    const volumeIcon = elements.muteBtn.querySelector('.player__volume-icon');
    const volumeIconMuted = elements.muteBtn.querySelector('.player__volume-icon-muted');
    
    if (state.isMuted || state.volume === 0) {
        volumeIcon.style.display = 'none';
        volumeIconMuted.style.display = 'block';
    } else {
        volumeIcon.style.display = 'block';
        volumeIconMuted.style.display = 'none';
    }
}

// ================================
// Favorites
// ================================

function toggleFavorite(track) {
    const index = state.favorites.findIndex(t => t.id === track.id);
    
    if (index === -1) {
        state.favorites.push(track);
    } else {
        state.favorites.splice(index, 1);
    }
    
    updateFavButton();
    renderTracks(state.favorites, 'libraryTracks');
    saveToStorage();
}

function isFavorite(track) {
    return state.favorites.some(t => t.id === track.id);
}

function updateFavButton() {
    if (!state.currentTrack) return;
    
    const isFav = isFavorite(state.currentTrack);
    elements.favBtn.classList.toggle('player__track-fav--active', isFav);
}

// ================================
// Playlists
// ================================

function createPlaylist(name) {
    const playlist = {
        id: Date.now(),
        name: name,
        tracks: []
    };
    
    state.playlists.push(playlist);
    renderPlaylists();
    saveToStorage();
}

function deletePlaylist(id) {
    state.playlists = state.playlists.filter(p => p.id !== id);
    renderPlaylists();
    saveToStorage();
}

function addToPlaylist(playlistId, track) {
    const playlist = state.playlists.find(p => p.id === playlistId);
    if (playlist && !playlist.tracks.some(t => t.id === track.id)) {
        playlist.tracks.push(track);
        saveToStorage();
    }
}

function openPlaylist(playlistId) {
    const playlist = state.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    state.currentView = 'playlist';
    state.currentPlaylistId = playlistId;
    
    elements.playlistName.textContent = playlist.name;
    elements.playlistTrackCount.textContent = playlist.tracks.length;
    renderTracks(playlist.tracks, 'playlistTracks');
    
    showPage('playlist');
}

function viewAllTracks() {
    state.currentView = 'home';
    showPage('home');
}

// ================================
// Recently Played
// ================================

function addToRecentlyPlayed(track) {
    // Remove if already exists
    state.recentlyPlayed = state.recentlyPlayed.filter(t => t.id !== track.id);
    
    // Add to beginning
    state.recentlyPlayed.unshift(track);
    
    // Keep only last 20
    state.recentlyPlayed = state.recentlyPlayed.slice(0, 20);
    
    saveToStorage();
}

// ================================
// Search
// ================================

function search(query) {
    state.searchQuery = query.toLowerCase();
    
    if (!query) {
        elements.searchResults.innerHTML = '';
        return;
    }
    
    const results = SAMPLE_TRACKS.filter(track => 
        track.title.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query) ||
        track.album.toLowerCase().includes(query)
    );
    
    renderTracks(results, 'searchResults');
}

// ================================
// Navigation
// ================================

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
    document.querySelectorAll('.header__nav-link').forEach(l => l.classList.remove('header__nav-link--active'));
    
    const pageEl = document.getElementById(`page${page.charAt(0).toUpperCase() + page.slice(1)}`);
    const navLink = document.querySelector(`.header__nav-link[data-page="${page}"]`);
    
    if (pageEl) pageEl.classList.add('page--active');
    if (navLink) navLink.classList.add('header__nav-link--active');
    
    state.currentView = page;
}

function showPlaylist(playlistId) {
    openPlaylist(playlistId);
}

// ================================
// Rendering
// ================================

function renderAlbums() {
    const html = SAMPLE_ALBUMS.map(album => `
        <div class="album-card" data-album="${album.id}">
            <div class="album-card__cover">
                <div class="album-card__cover-placeholder">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/>
                        <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <button class="album-card__play">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
            </div>
            <div class="album-card__title">${album.title}</div>
            <div class="album-card__artist">${album.artist}</div>
        </div>
    `).join('');
    
    elements.albumsGrid.innerHTML = html;
}

function renderTracks(tracks, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (tracks.length === 0) {
        container.innerHTML = `
            <div class="search-empty">
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 16l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p>Ничего не найдено</p>
            </div>
        `;
        return;
    }
    
    const html = tracks.map((track, index) => {
        const isPlaying = state.currentTrack && state.currentTrack.id === track.id;
        const isFav = isFavorite(track);
        
        return `
        <div class="track-row ${isPlaying ? 'track-row--playing' : ''}" data-track-id="${track.id}">
            <div class="track-row__number">${String(index + 1).padStart(2, '0')}</div>
            <div class="track-row__playing">
                <span></span><span></span><span></span><span></span>
            </div>
            <div class="track-row__cover">
                <div style="width:100%;height:100%;background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" style="color:var(--text-muted)">
                        <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="track-row__title">${track.title}</div>
            <div class="track-row__artist">${track.artist}</div>
            <div class="track-row__duration">${formatTime(track.duration)}</div>
            <div class="track-row__actions">
                <button class="track-row__action track-row__action--fav ${isFav ? 'track-row__action--active' : ''}" data-action="fav" title="В избранное">
                    <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </button>
                <button class="track-row__action" data-action="queue" title="В очередь">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    `}).join('');
    
    container.innerHTML = html;
}

function renderPlaylists() {
    // Render user playlists in sidebar
    const html = state.playlists.map(playlist => `
        <div class="sidebar__item" data-playlist="${playlist.id}">
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/>
                <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>${playlist.name}</span>
        </div>
    `).join('');
    
    elements.userPlaylists.innerHTML = html;
}

function renderQueue() {
    if (state.queue.length === 0) {
        elements.queueList.innerHTML = `
            <div class="queue-modal__empty">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p>Очередь пуста</p>
            </div>
        `;
        return;
    }
    
    const html = state.queue.map((track, index) => `
        <div class="queue-modal__item" data-index="${index}">
            <div class="queue-modal__item-cover"></div>
            <div class="queue-modal__item-info">
                <div class="queue-modal__item-title">${track.title}</div>
                <div class="queue-modal__item-artist">${track.artist}</div>
            </div>
            <button class="queue-modal__item-remove" data-action="remove-queue" title="Удалить">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    `).join('');
    
    elements.queueList.innerHTML = html;
}

function renderCurrentTrack() {
    if (!state.currentTrack) return;
    
    elements.currentTitle.textContent = state.currentTrack.title;
    elements.currentArtist.textContent = state.currentTrack.artist;
    
    // Update total time
    elements.totalTime.textContent = formatTime(state.currentTrack.duration);
}

function highlightCurrentTrack() {
    document.querySelectorAll('.track-row').forEach(row => {
        const trackId = row.dataset.trackId;
        if (state.currentTrack && trackId == state.currentTrack.id) {
            row.classList.add('track-row--playing');
            
            // Scroll into view
            row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            row.classList.remove('track-row--playing');
        }
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
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });
    
    // Sidebar
    elements.playlistList.addEventListener('click', (e) => {
        const item = e.target.closest('.sidebar__item');
        if (!item) return;
        
        const playlist = item.dataset.playlist;
        
        if (playlist === 'all') {
            viewAllTracks();
        } else if (playlist === 'favorites') {
            renderTracks(state.favorites, 'playlistTracks');
            elements.playlistName.textContent = 'Избранное';
            elements.playlistTrackCount.textContent = state.favorites.length;
            showPage('playlist');
        } else if (playlist === 'recent') {
            renderTracks(state.recentlyPlayed, 'playlistTracks');
            elements.playlistName.textContent = 'Недавно';
            elements.playlistTrackCount.textContent = state.recentlyPlayed.length;
            showPage('playlist');
        }
    });
    
    // User playlists
    elements.userPlaylists.addEventListener('click', (e) => {
        const item = e.target.closest('.sidebar__item');
        if (!item) return;
        
        showPlaylist(parseInt(item.dataset.playlist));
    });
    
    // Search
    const searchInput = document.querySelector('.header__search-input');
    searchInput.addEventListener('input', (e) => {
        search(e.target.value);
        if (e.target.value) {
            showPage('search');
        }
    });
    
    // Player controls
    elements.playBtn.addEventListener('click', togglePlay);
    elements.prevBtn.addEventListener('click', prevTrack);
    elements.nextBtn.addEventListener('click', nextTrack);
    elements.shuffleBtn.addEventListener('click', toggleShuffle);
    elements.repeatBtn.addEventListener('click', toggleRepeat);
    elements.muteBtn.addEventListener('click', toggleMute);
    
    // Volume bar
    elements.volumeBar.addEventListener('click', (e) => {
        const rect = elements.volumeBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        setVolume(percent);
    });
    
    // Progress bar
    elements.progressBar.addEventListener('click', (e) => {
        if (!state.currentTrack) return;
        
        const rect = elements.progressBar.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width);
        state.progress = percent * state.currentTrack.duration;
        updateProgressUI();
    });
    
    // Favorites
    elements.favBtn.addEventListener('click', () => {
        if (state.currentTrack) {
            toggleFavorite(state.currentTrack);
        }
    });
    
    // Queue modal
    elements.queueBtn.addEventListener('click', () => {
        elements.queueModal.classList.toggle('queue-modal--active');
    });
    
    elements.queueModalClose.addEventListener('click', () => {
        elements.queueModal.classList.remove('queue-modal--active');
    });
    
    // Close queue modal when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.queueModal.contains(e.target) && !elements.queueBtn.contains(e.target)) {
            elements.queueModal.classList.remove('queue-modal--active');
        }
    });
    
    // Queue list
    elements.queueList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('[data-action="remove-queue"]');
        if (removeBtn) {
            const item = removeBtn.closest('.queue-modal__item');
            removeFromQueue(parseInt(item.dataset.index));
            return;
        }
        
        const item = e.target.closest('.queue-modal__item');
        if (item) {
            const index = parseInt(item.dataset.index);
            playTrack(state.queue[index]);
        }
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
    
    elements.createPlaylistModal.addEventListener('click', (e) => {
        if (e.target === elements.createPlaylistModal) {
            elements.createPlaylistModal.classList.remove('modal--active');
        }
    });
    
    // Playlist play button
    elements.playlistPlayBtn.addEventListener('click', () => {
        const tracks = document.querySelectorAll('#playlistTracks .track-row');
        if (tracks.length > 0) {
            const firstTrackId = tracks[0].dataset.trackId;
            const track = SAMPLE_TRACKS.find(t => t.id == firstTrackId) || state.favorites[0];
            if (track) {
                state.queue = [...document.querySelectorAll('#playlistTracks .track-row')].map(
                    r => SAMPLE_TRACKS.find(t => t.id == r.dataset.trackId)
                ).filter(Boolean);
                state.queueIndex = 0;
                playTrack(track);
            }
        }
    });
    
    // Track click handling
    document.addEventListener('click', (e) => {
        // Album play button
        const albumPlay = e.target.closest('.album-card__play');
        if (albumPlay) {
            const card = albumPlay.closest('.album-card');
            const albumId = card.dataset.album;
            // Play album tracks
            playTrack(SAMPLE_TRACKS[0]);
            return;
        }
        
        // Track row click
        const trackRow = e.target.closest('.track-row');
        if (trackRow && !e.target.closest('.track-row__action')) {
            const trackId = trackRow.dataset.trackId;
            const track = SAMPLE_TRACKS.find(t => t.id == trackId);
            if (track) {
                // Find which container this track belongs to
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
            const row = actionBtn.closest('.track-row');
            const trackId = row.dataset.trackId;
            const track = SAMPLE_TRACKS.find(t => t.id == trackId);
            const action = actionBtn.dataset.action;
            
            if (action === 'fav') {
                toggleFavorite(track);
                actionBtn.classList.toggle('track-row__action--active');
                const svg = actionBtn.querySelector('svg path');
                if (svg) {
                    svg.setAttribute('fill', actionBtn.classList.contains('track-row__action--active') ? 'currentColor' : 'none');
                }
            } else if (action === 'queue') {
                addToQueue(track);
            }
        }
    });
    
    // Context menu (right-click)
    document.addEventListener('contextmenu', (e) => {
        const trackRow = e.target.closest('.track-row');
        if (trackRow) {
            e.preventDefault();
            
            elements.contextMenu.style.left = `${e.clientX}px`;
            elements.contextMenu.style.top = `${e.clientY}px`;
            elements.contextMenu.classList.add('context-menu--active');
            
            const trackId = trackRow.dataset.trackId;
            elements.contextMenu.dataset.trackId = trackId;
            
            // Update favorites option
            const track = SAMPLE_TRACKS.find(t => t.id == trackId);
            const isFav = isFavorite(track);
            document.querySelector('[data-action="addToFavorites"]').style.display = isFav ? 'none' : 'block';
            document.querySelector('[data-action="removeFromFavorites"]').style.display = isFav ? 'block' : 'none';
        }
    });
    
    // Close context menu on click
    document.addEventListener('click', (e) => {
        if (!elements.contextMenu.contains(e.target)) {
            elements.contextMenu.classList.remove('context-menu--active');
        }
    });
    
    // Context menu actions
    elements.contextMenu.addEventListener('click', (e) => {
        const item = e.target.closest('.context-menu__item');
        if (!item) return;
        
        const trackId = elements.contextMenu.dataset.trackId;
        const track = SAMPLE_TRACKS.find(t => t.id == trackId);
        const action = item.dataset.action;
        
        if (action === 'addToQueue') {
            addToQueue(track);
        } else if (action === 'addToFavorites') {
            toggleFavorite(track);
        } else if (action === 'removeFromFavorites') {
            toggleFavorite(track);
        }
        
        elements.contextMenu.classList.remove('context-menu--active');
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
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
    const data = {
        volume: state.volume,
        favorites: state.favorites,
        playlists: state.playlists,
        recentlyPlayed: state.recentlyPlayed,
        repeat: state.repeat,
        shuffle: state.shuffle
    };
    
    try {
        localStorage.setItem('soundwave_data', JSON.stringify(data));
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
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
            
            // Apply loaded state
            elements.shuffleBtn.classList.toggle('player__btn--active', state.shuffle);
            elements.repeatBtn.classList.toggle('player__btn--active', state.repeat !== 'off');
        }
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
}

// ================================
// Utilities
// ================================

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ================================
// Initialize
// ================================

document.addEventListener('DOMContentLoaded', init);