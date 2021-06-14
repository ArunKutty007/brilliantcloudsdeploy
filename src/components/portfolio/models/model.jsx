import React from "react";
import "./model.scss";
import { creator1 } from "../../../assets/index";

const Model = () => {
  return (
    <div className="model">
        <div className='container'>
        <div className="imageContainer">
       <p ><img className='img' src={creator1} alt="creator" /></p> 
      </div>
      <div className="content">
       <h2>Project Information</h2>
       <ul>
           <li>
               Category:Zoho Creator
           </li>
           <li>
               Client:ASU Company
           </li>
           <li>
               Project date:01 March 2020
            </li>
            
       </ul>

      </div>
        </div>
      
    </div>
  );
};

export default Model;
