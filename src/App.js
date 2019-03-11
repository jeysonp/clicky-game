import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import BandPics from './components/BandPics';


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
  };

render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <BandPics />
      
      </div>
    );
  }
}

export default App;
