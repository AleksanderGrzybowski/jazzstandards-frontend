import axios from 'axios';

export function listSongs() {
    return axios.get('/api/songs').then(({data}) => data);
}

export function togglePractice(songId) {
    return axios.post(`/api/songs/${songId}/togglePractice`);
}
