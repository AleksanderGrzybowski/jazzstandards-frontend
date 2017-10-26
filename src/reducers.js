const songsInitialState = {
    status: 'LOADING',
    songs: []
};

export function songs(state = songsInitialState, action) {
    switch (action.type) {
        case 'SONGS_LOADING':
            return {status: 'LOADING', songs: []};
        case 'SONGS_LOADED':
            return {status: 'LOADED', songs: action.songs};
        default:
            return state;
    }
}

const viewInitialState = {newSongFormVisible: false};

export function view(state = viewInitialState, action) {
    switch (action.type) {
        case 'SHOW_NEW_SONG_FORM':
            return {newSongFormVisible: true};
        case 'HIDE_NEW_SONG_FORM':
            return {newSongFormVisible: false};
        default:
            return state;
    }
}
