import React from "react";
import "./model.scss";
import {
  creator1,
  creator2,
  creator3,
  creator4,
  creator5,
  crm1,
  crm2,
  crm3,
  desk1,
  desk2,
  desk3,
} from "../../../assets/index";

const Model = ({ setIsModal, isModal }) => {
  const renderImage = (
    <>
      {isModal === 0 && (
        <div className="image_container">
          <h1>Dashboard</h1>
          <div>

          <img className="img" src={creator1} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 1 && (
        <div className="image_container">
          <h1>ATP-JetAirways</h1>
          <div>

          <img className="img" src={creator2} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 2 && (
        <div className="image_container">
          <h1>Client Printshop</h1>
          <div>

          <img className="img" src={creator3} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 3 && (
        <div className="image_container">
          <h1>Ortho Care</h1>
          <div>

          <img className="img" src={creator4} alt="creator" />
          </div>

        </div>
      )}
      {isModal === 4 && (
        <div className="image_container">
          <h1>SRM</h1>
          <div>

          <img className="img" src={creator5} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 5 && (
        <div className="image_container">
          <h1>CRM BluePrint</h1>
          <div>

          <img className="img" src={crm1} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 6 && (
        <div className="image_container">
          <h1>Credit Reboot</h1>
          <div>

          <img className="img" src={crm2} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 7 && (
        <div className="image_container">
          <h1>Paragon Private Health</h1>
          <div>

          <img className="img" src={crm3} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 8 && (
        <div className="image_container">
          <h1>Deluge Script Custom Function</h1>
          <div>

          <img className="img" src={desk1} alt="creator" />
          </div>
        </div>
      )}
      {isModal === 9 && (
        <div className="image_container">
          <h1>Zoho Sales IQ</h1>
          <div>

          <img className="img" src={desk2} alt="creator" />
            </div>
        </div>
      )}
      {isModal === 10 && (
        <div className="image_container">
          <h1>CRM Web</h1>
          <div>

          <img className="img" src={desk3} alt="creator" />
          </div>
        </div>
      )}
    </>
  );

  const renderContent = (
    <>
      {isModal === 0 && (
        <div className="content">
          <ul>
            <li>Category:Zoho Creator</li>
            <li>Client:ASU Company</li>
            <li>Project date:01 March 2020</li>
          </ul>
          <div className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            nulla quod veniam ullam, sed sit itaque! Earum animi, natus delectus
            similique officiis, enim corporis rem provident temporibus
            aspernatur, at culpa?
          </div>
        </div>
      )}
      {isModal === 1 && (
        <div className="content">
        <ul>
          <li>Category:Zoho Creator</li>
          <li>Client:Jet Airways</li>
          <li>Project date:01 March 2020</li>
        </ul>
        <div className='description'>
        Jet Airways is a major Indian international airline based in Mumbai, India. This ATP application is used for internal purpose. To automate the procedure of providing an authority to proceed (ATP) in case of any concession/deviation in order to prevent any disruption to service.ATP (Authority To Proceed) is the process of multiple level of approvals.
        </div>
      </div>
      )}
      {isModal === 2 && (
        <div className="content">
        <ul>
          <li>Category:Zoho Creator</li>
          <li>Client:Ortho Care</li>
          <li>Project date:01 March 2020</li>
        </ul>
        <div className='description'>
        This software is one of a complex app that is build in Zoho Creator. Initially started as a small and later transformed into a big CRM which deals with leads maintenance, customer portal, order management, internal operations tracking and inventory management.
        </div>
      </div>
      )}
      {isModal === 3 && (
        <div className="content">
        <ul>
          <li>Category:Zoho Creator</li>
          <li>Client:SRM</li>
          <li>Project date:01 March 2020</li>
        </ul>
        <div className='description'>
        To manage the all the process starts from purchase order to patient billing. Developed this application for one of the largest medical supplier in California.
        </div>
      </div>
      )}
      {isModal === 4 && (
       <div className="content">
       <ul>
         <li>Category:Zoho Creator</li>
         <li>Client:ASU Company</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
         nulla quod veniam ullam, sed sit itaque! Earum animi, natus delectus
         similique officiis, enim corporis rem provident temporibus
         aspernatur, at culpa?
       </div>
     </div>
      )}
       {isModal === 5 && (
       <div className="content">
       <ul>
         <li>Category:Zoho CRM</li>
         <li>Client:ASU Company</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
       I have set up live chat to one of my customer in US, using multiple department to multiple websites. I did handle to assign the tickets in zoho desk as well
       </div>
     </div>
      )}
       {isModal === 6 && (
       <div className="content">
       <ul>
         <li>Category:Zoho CRM</li>
         <li>Client:Australia</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
         nulla quod veniam ullam, sed sit itaque! Earum animi, natus delectus
         similique officiis, enim corporis rem provident temporibus
         aspernatur, at culpa?
       </div>
     </div>
      )}
       {isModal === 7 && (
       <div className="content">
       <ul>
         <li>Category:Zoho CRM</li>
         <li>Client:Paragon</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
       To manage the all the process starts with Patient Enrollment to patient billing. Developed this application for one of the largest medical supplier in the USA
       </div>
     </div>
      )}
       {isModal === 8 && (
       <div className="content">
       <ul>
         <li>Category:Zoho Subscription</li>
         <li>Client:ASU Company</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
       Getting data from subscription using API method and push into third party service using deluge script in a event(custom function)
       </div>
     </div>
      )}
       {isModal === 9 && (
       <div className="content">
       <ul>
         <li>Category:Zoho Subscirption</li>
         <li>Client:ASU Company</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
       I have set up live chat to one of my customer in US, using multiple department to multiple websites. I did handle to assign the tickets in zoho desk as well
       </div>
     </div>
      )}
       {isModal === 10 && (
       <div className="content">
       <ul>
         <li>Category:Zoho Subscription</li>
         <li>Client:ASU Company</li>
         <li>Project date:01 March 2020</li>
       </ul>
       <div className='description'>
         
       </div>
     </div>
      )}
       
    </>
  );
  

  return (
    <div className="model">
      {renderImage}
      {renderContent}
      <div className="close_icon">
        <i
          className="fas fa-times"
          style={{ cursor: "pointer" }}
          onClick={() => setIsModal()}
        ></i>
      </div>
    </div>
  );
};

export default Model;
