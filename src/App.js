import Teams from './Teams';
import React from 'react';
import Players from './Players';

const tableStyle = {width: '50%', minWidth: '700px'};

const App = () => {
    return <div style={{display: 'flex'}}>
        <div style={tableStyle}><Teams/></div>
        <div style={tableStyle}><Players/></div>
    </div>;
};

export default App;