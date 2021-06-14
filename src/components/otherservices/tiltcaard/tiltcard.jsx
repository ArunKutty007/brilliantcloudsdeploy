import React from 'react'
import Tilt from 'react-parallax-tilt';

const Tiltcard = ({img,title,text}) => {
    return (
        <div>
             <Tilt>
      <div style={{ height: '300px', backgroundColor: '#fff',padding:'20px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:'20px',cursor:'pointer',boxShadow:"0 0 30px rgba(0,0,0,0.1)" }}>
        <img src={img} alt="serviceimage" className="image" style={{width:"100px"}}/>
        <h1 >{title}</h1>
        <p>{text}</p>
      </div>
    </Tilt>
        </div>
    )
}

export default Tiltcard
