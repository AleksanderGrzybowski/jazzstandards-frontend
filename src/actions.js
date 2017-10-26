const DATABASE = [
    {
        id: 1,
        title: 'All the things you are',
        backingTrackUrl: 'https://www.youtube.com/watch?v=iyHDHYrdWPs',
        practiceLog: ['2017-10-23', '2017-10-25']
    },
    {
        id: 2,
        title: 'Donna Lee',
        backingTrackUrl: 'https://www.youtube.com/watch?v=fVOTUXfqhhE',
        practiceLog: ['2017-10-24', '2017-10-25']
    }
];

export function loadSongs() {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        setTimeout(() => {
            dispatch({type: 'REQUEST_FINISH'});

            dispatch({
                type: 'SONGS_LOADED',
                songs: DATABASE
            });
        }, 1000);
    }
}

export function addSong(title, url) {
    return dispatch => {
        dispatch({type: 'REQUEST_START'});

        setTimeout(() => {
            dispatch({type: 'REQUEST_FINISH'});

            const nextId = DATABASE[DATABASE.length - 1].id + 1;
            DATABASE.push({id: nextId, title, backingTrackUrl: url});

            dispatch(setSongFormVisible(false));
            dispatch(loadSongs());

        }, 500);
    }
}

export function setSongFormVisible(visible) {
    return dispatch => {
        dispatch({type: visible ? 'SHOW_NEW_SONG_FORM' : 'HIDE_NEW_SONG_FORM'})
    }
}
