import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/index.js';
import BandCard from './components/BandCard/index.js';
import NavBar from './components/NavBar/index.js'
import bands from "./bands.json";


class App extends Component {
  state = {
    bands,
    score: 0,
    highScore: 0,
  };

render() {
    return (
      <div className="App">
        <NavBar 
        total = {this.state.score}
      />
      <Wrapper>
        {this.state.bands.map(band => (
          <BandCard
            id={band.id}
            key={band.id}
            image={band.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
