import moment from 'moment';

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

export function listSongs() {
    return withMockDelay(DATABASE);
}

export function addSong(title, url) {
    const nextId = DATABASE[DATABASE.length - 1].id + 1;
    DATABASE.push({id: nextId, title, backingTrackUrl: url, practiceLog: []});

    return withMockDelay({});
}
export function addPractice(songId) {
    DATABASE.find(song => song.id === songId).practiceLog.push(moment().format('YYYY-MM-DD'));

    return withMockDelay({});
}

function withMockDelay(resolvedValue) {
    return new Promise(resolve => {
        setTimeout(() => resolve(resolvedValue), 500);
    });
}
