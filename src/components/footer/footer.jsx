import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <>
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
           {/* Developed and Maintained by  <span><img style={{width:"50px",position:"relative",top:"20px",transition:"all 1s",cursor:"pointer"}} className="anonymous" src={anonymous2}/> </span> */}
    </div>
    </>
   
    )
}

export default Footer

