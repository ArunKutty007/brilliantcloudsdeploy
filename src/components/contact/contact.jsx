import React from "react";
import { anonymous2 } from "../../assets";
import "./contact.scss";

const Contact = () => {
  return (
      <>
    <div className="contact">
      <h1>
        Contact Us
        
      </h1>
      <div className="container">
        <div className="address">
            <h3>Address</h3>
          <p>
            
            3/354, Anna nagar,Peddamelupalli Krishnagiri,<br/>635002 Tamilnadu,<br/>India
          </p>
        </div>
        <div>
            <h3>Email</h3>info@brilliantclouds.com</div>
        <div>Call Us<br/> +91-8610099102<br/> +91-8668470481 <br/></div>
      </div>
      <div className="footer">
     <div className="fcontainer">
       <div>
         <h1>Brilliant Clouds</h1>
         <p>
           3/354, Anna nagar,Peddamelupalli,
           <br />
           Krishnagiri,635002,
           <br />
           Tamilnadu,India
         </p>
         <p>
           <span>Phone:</span>+91-8610099102/+91-8668470481
         </p>
         <p>
           <span>Email:</span>info@brilliantclouds.com
         </p>
       </div>
       <div className="icons">
       <i class="fab fa-facebook-square"></i>
       <i class="fab fa-linkedin"></i>
       <i class="fab fa-twitter-square"></i>
       <i class="fab fa-instagram-square"></i>


       </div>
       
       </div>
       
     </div>
     <div className="copyright">
          <p>&copy;Copyright Brilliant Clouds. All Rights Reserved</p> 
           Developed and Maintained by  <span><img style={{width:"50px",position:"relative",top:"20px",transition:"all 1s",cursor:"pointer"}} className="anonymous" src={anonymous2}/> </span>
    </div>
   </div>
    
    
    </>
  );
};

export default Contact;
