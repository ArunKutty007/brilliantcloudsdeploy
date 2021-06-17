import React, { useState } from "react";
import "./topbar.scss";
import { logo } from "../../assets/index";
import Sidebar from '../sidebar/sidebar'
import menu from '../../assets/index'

const Topbar = () => {

  const [isSidebar,setIsSidebar]=useState(false)



  return (

<>
    <div className="topbar">
      <div className="container">
        
          <div className="header">
            <img src={logo} className="logo" alt="logo"/>
            <span>BRILLIANT CLOUDS</span>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              
            </ul>
          </nav>
          <div className='baricon' onClick={()=>setIsSidebar(true)}>
          <span style={{fontSize:"40px"}}><i class="fas fa-bars "></i></span> 
          </div>
          
      </div>
    </div>
   <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </>
  ) 
 
    
    

    
  
};

export default Topbar;
