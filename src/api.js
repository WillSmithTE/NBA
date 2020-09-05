// const HOST = 'http://localhost:5000';
const HOST = 'https://ratings-2k-be-tumozo4dqa-ts.a.run.app';

const fetchJson = (url) => fetch(url).then((response) => response.json());

export const fetchTeams = () => fetchJson(`${HOST}/api/team`);
export const fetchPlayers = () => fetchJson(`${HOST}/api/player`);
