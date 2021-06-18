import React from 'react'
import './footer.scss'
import {logo} from '../../assets/index'

const Footer = () => {
    return (
        <>
        <div className="footer">
     <div className="fcontainer">
       <div>
         <p style={{fontSize:"2rem"}}><img src={logo} alt='footer' style={{width:"60px"}}/>Brilliant Clouds</p>
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
       <a href='#'><i class="fab fa-facebook-square"></i></a>
       <a href='#'><i class="fab fa-linkedin"></i></a>
       <a href='#'><i class="fab fa-twitter-square"></i></a>
       <a href='#'><i class="fab fa-instagram-square"></i></a>


       </div>
       
       </div>
       
     </div>
     <div className="copyright">
          <p>&copy;Copyright Brilliant Clouds. All Rights Reserved</p> <br/>
          <span><p> Developed and Maintained by <span style={{fontSize:"1.2rem"}}> F</span>utura </p></span>
    </div>
    </>
   
    )
}

export default Footer

