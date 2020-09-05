import React from 'react';
import EnhancedTable from './component/EnhancedTable';
import {fetchTeams} from './api';
import {scaleValues} from './util';

async function getTeams() {
    const response = await fetchTeams();
    Object.values(response).forEach((team) => team.winEfficiency = team.wins / team.expectedQuality19_20);
    Object.keys(response).forEach((teamName) => response[teamName].team = teamName);
    scaleValues(response, 'winEfficiency');
    scaleValues(response, 'expectedQuality19_20');
    scaleValues(response, 'rating2k');
    return Object.values(response);
}

const headCells = [
    {id: 'team', label: 'Team'},
    {id: 'winEfficiency', label: 'Win Efficiency'},
    {id: 'expectedQuality19_20', label: 'Expected 2019-20 success'},
    {id: 'wins', label: 'Wins'},
    {id: 'rating2k', label: 'Current Rating'},
];

export default function Teams() {
    const [teams, setTeams] = React.useState(undefined);

    React.useEffect(() => {
        getTeams().then((response) => setTeams(response));
    }, []);

    return teams ?
        <EnhancedTable
            orderBy='winEfficiency'
            keyProp='team'
            rows={teams}
            headCells={headCells}
        /> :
        <h1>Loading</h1>;
}
