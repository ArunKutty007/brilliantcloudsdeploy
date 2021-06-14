import React from 'react'
import './card.scss'
const Card = ({name,text,work}) =>{
    return(
        <div className="testimonialcard">
            <h3>{name}</h3>
            <span>{work}</span>
            <p>{text}</p>
        </div>
    )

}

export default Card