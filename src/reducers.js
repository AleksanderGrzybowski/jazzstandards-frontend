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

export function addSongRow(state = {}, action) {
    return state;
}
