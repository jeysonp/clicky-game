import React from 'react';

const NavBar = props => (
  <nav className="navbar navbar-light bg-dark">
      <h1>80's Post-Punk Clicky Game</h1>
    <h2 className = "score">Score: {props.total}</h2>
    <h2 className = "score">HighScore: {props.total}</h2>
  </nav>
)

export default NavBar