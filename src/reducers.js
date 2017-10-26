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

const viewInitialState = {
    requestInProgess: false,
    newSongFormVisible: false
};

export function view(state = viewInitialState, action) {
    switch (action.type) {
        case 'REQUEST_START':
            return Object.assign({}, state, {requestInProgess: true});
        case 'REQUEST_FINISH':
            return Object.assign({}, state, {requestInProgess: false});
        case 'SHOW_NEW_SONG_FORM':
            return Object.assign({}, state, {newSongFormVisible: true});
        case 'HIDE_NEW_SONG_FORM':
            return Object.assign({}, state, {newSongFormVisible: false});
        default:
            return state;
    }
}
