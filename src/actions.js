import * as backend from './backend';

export function loadSongs() {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.listSongs().then(songs => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch({
                type: 'SONGS_LOADED',
                songs: songs
            });
        })
    }
}

export function addSong(title, url) {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.addSong(title, url).then(() => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch(setSongFormVisible(false));
            dispatch(loadSongs());
        });
    }
}

export function addPractice(songId) {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        backend.addPractice(songId).then(() => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch(loadSongs());
        });
    }
}

export function setSongFormVisible(visible) {
    return dispatch => {
        dispatch({type: visible ? 'SHOW_NEW_SONG_FORM' : 'HIDE_NEW_SONG_FORM'})
    }
}
