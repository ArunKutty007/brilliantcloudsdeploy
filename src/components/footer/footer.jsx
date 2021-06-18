import React from 'react'
import './footer.scss'
import {anonymous2, logo} from '../../assets/index'

const Footer = () => {
    return (
        <>
        <div className="footer">
     <div className="fcontainer">
       <div>
         <p style={{fontSize:"2rem"}}><img src={logo} style={{width:"60px"}}/>Brilliant Clouds</p>
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
          <p>&copy;Copyright Brilliant Clouds. All Rights Reserved</p> <br/>
          <span><p> Developed and Maintained by futura </p></span>
    </div>
    </>
   
    )
}

export default Footer

