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
    requestError: false
};

export function view(state = viewInitialState, action) {
    switch (action.type) {
        case 'REQUEST_START':
            return Object.assign({}, state, {requestInProgess: true});
        case 'REQUEST_FINISH':
            return Object.assign({}, state, {requestInProgess: false});
        case 'REQUEST_ERROR':
            return Object.assign({}, state, {requestError: true});
        default:
            return state;
    }
}
