import React from "react";
import "./card.scss";

const Card = ({title,img,text}) => {
 

  return (
    <div className="card">
      <img src={img} className="img" alt="card"></img>
      <h3>{title}</h3>
      <p>
       {text}
      </p>
      <a href="#portfolio">Projects</a>
    </div>
  );
};

export default Card;
