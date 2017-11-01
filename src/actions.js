import * as backend from './backend';

const serverError = (e) => ({type: 'REQUEST_ERROR', error: e});

export function loadSongs() {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.listSongs().then(songs => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch({
                type: 'SONGS_LOADED',
                songs: songs
            });
        }).catch(e => dispatch(serverError(e)))
    }
}

export function addSong(title, url) {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.addSong(title, url).then(() => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch(setSongFormVisible(false));
            dispatch(loadSongs());
        }).catch(e => dispatch(serverError(e)))
    }
}

export function togglePractice(songId) {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.togglePractice(songId).then(() => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch(loadSongs());
        }).catch(e => dispatch(serverError(e)))
    }
}

export function setSongFormVisible(visible) {
    return dispatch => {
        dispatch({type: visible ? 'SHOW_NEW_SONG_FORM' : 'HIDE_NEW_SONG_FORM'})
    }
}
