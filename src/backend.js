import axios from 'axios';

export function listSongs() {
    return axios.get('/api/songs').then(({data}) => data);
}

export function addSong(title, url) {
    return axios.post('/api/songs', {title, backingTrackUrl: url});
}

export function togglePractice(songId) {
    return axios.post(`/api/songs/${songId}/togglePractice`);
}
