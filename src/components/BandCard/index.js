import React from "react";
import "./style.css";

const BandCard = props => {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
    
    </div>
  );
}

export default BandCard;