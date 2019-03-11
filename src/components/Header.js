import React, { Component } from 'react';
import ('./style.css');

class Header extends Component {

render() {
    return (
      <nav className="nav">
        <div className="row">
          <div className="col-3">80's Post-Punk Clicky Game</div>
          <div className="col-4">Click a band to begin!</div>
          <div className="col-2">Score: </div>
          <div className="col-2" >High Score: </div>
        </div>
      </nav>
    );
  }
}

export default Header