import React from "react";
import "./model.scss";
import { creator1 } from "../../../assets/index";

const Model = ({setIsModal,isModal}) => {

  const renderImage=(
    <>
     {isModal===0&&<div className="image_container"><img className='img' src={creator1} alt="creator" /></div>}
     {isModal===1&&<div className="image_container"><img className='img' src={creator1} alt="creator" /></div>}
     {isModal===2&&<div className="image_container"><img className='img' src={creator1} alt="creator" /></div>}
     {isModal===3&&<div className="image_container"><img className='img' src={creator1} alt="creator" /></div>}
     {isModal===4&&<div className="image_container"><img className='img' src={creator1} alt="creator" /></div>}
     </>
  )

  const renderContent=(
    <div className="content">
       <h2>Project Information {isModal}</h2>
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
  )
  return (
    <div className="model">
      {renderImage}
      {renderContent}
      <div className="close_icon"><i className="fas fa-times" style={{cursor:'pointer'}} onClick={() => setIsModal()}></i></div>
    </div>
  );
};

export default Model;
