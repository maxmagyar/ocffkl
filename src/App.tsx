import React from 'react';
import './App.css';
import PlayerAccolade from './components/PlayerAccolade';
import { PlayerAccolades, TeamAccolades } from './data/Accolades';
import { Grid } from '@material-ui/core';
import TeamAccolade from './components/TeamAccolade';


function App() {
  return (
    <div className="App">
      <div className="AppContent">
        <Grid container spacing={2}>
          {TeamAccolades.map(accolade => (
            <Grid key={accolade.id} item>
              <TeamAccolade accolade={accolade}/>
            </Grid>
          ))}
          {PlayerAccolades.map(accolade => (
            <Grid key={accolade.id} item>
              <PlayerAccolade accolade={accolade}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
