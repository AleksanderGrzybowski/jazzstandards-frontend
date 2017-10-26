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
    return Promise.resolve(DATABASE);
}

export function addSong(title, url) {
    const nextId = DATABASE[DATABASE.length - 1].id + 1;
    DATABASE.push({id: nextId, title, backingTrackUrl: url, practiceLog: []});

    return Promise.resolve({});
}