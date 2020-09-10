import React from 'react';
import {fetchPlayers} from './api';
import {scaleValues} from './util';
import EnhancedTable from './component/EnhancedTable';

const SCORE_EXPONENTIAL = 8;

async function getPlayers() {
    const response = await fetchPlayers();
    Object.values(response).forEach((player) => {
        const teamMinutesCurrentTeam = player.teamsMinutes.find(({ teamName }) => teamName === player.teamName);
        if (teamMinutesCurrentTeam !== undefined) {
            player.minutes = teamMinutesCurrentTeam.minutes;
        } else {
            player.minutes = 0;
        }
        player.value19_20 = (player.rating ** SCORE_EXPONENTIAL) * player.minutes;
    });
    scaleValues(response, 'value19_20');
    return Object.values(response);
}

const headCells = [
    {id: 'name', label: 'Name'},
    {id: 'rating', label: '2k Rating'},
    {id: 'teamName', label: 'Team'},
    {id: 'value19_20', label: '2019-20 Value For Team'},
    {id: 'minutes', label: 'Minutes for team'},
];

export default function Players() {
    const [players, setPlayers] = React.useState(undefined);

    React.useEffect(() => {
        getPlayers().then(setPlayers);
    }, []);

    return players ?
        <EnhancedTable
            orderBy='rating'
            keyProp='nameName'
            rows={players}
            headCells={headCells}
            title='Players'
        /> :
        <h1>Loading</h1>;
}

