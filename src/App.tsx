import React from 'react';
import './App.css';
import { Grid } from './components/grid/grid';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memo game</h1>
        <button>New game</button>
      </header>
      <Grid></Grid>
    </div>
  );
}

export default App;
