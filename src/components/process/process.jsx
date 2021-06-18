import React,{useState} from "react";
import "./process.scss";
import {apartlogo,medico,jetairways,eton,delivery,maintenance,testing,design,development} from '../../assets/index'
const Process = () => {
  const data = [
    {
      title: "Design",
      text: "Creating a structure for the project",
      img:design
    },
    {
      title: "Development",
      text: "Start coding according to the requirements",
      img:development
    },
    {
      title: "Testing",
      text: "Testing before the software is delivered to customers",
      img:testing
    },
    {
      title: "Delivery",
      text: "Time to deploy to production",
      img:delivery
    },
    {
      title: "Maintenenace",
      text: "Looks after any post-production issues",
      img:maintenance
    },
  ];

  const [img, setimg] = useState(0)

   const renderImage = (
    <>
      {img === 0 && (
        <div className="image_container">
          <img className="img" src={design} alt="creator" />
        </div>
      )}
      {img === 1 && (
        <div className="image_container">
          <img className="img" src={development} alt="creator" />
        </div>
      )}
      {img === 2 && (
        <div className="image_container">
          <img className="img" src={testing} alt="creator" />
        </div>
      )}
        {img === 3 && (
        <div className="image_container">
          <img className="img" src={delivery} alt="creator" />
        </div>
      )}
        {img === 4 && (
        <div className="image_container">
          <img className="img" src={maintenance} alt="creator" />
        </div>
      )}
</>
   )
  return (
    <div className="process" id="process">
      <h1>Process</h1>
      
        
          <div className='procontainer'>
          <div className="left">
            {data.map((d,index) => {
              return (
                <>
                
                <div className="section" onClick={() => setimg(index)}>
                  <div className="info">
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                    
                  </div>
                </div>
                
                
              
              </>
              );
            })}
            </div>
             <div className='right'>
                 {renderImage}
                </div>
          </div>
        
        
    
      <div className="clients">
            <h1>Clients</h1>
            <div className='cliContainer'>
                <div className='imageContainer'>
                <img src={eton} alt='client'/>
                </div>
                <div className='imageContainer'>
                <img src={medico} alt='client'/>
                </div>
                <div className='imageContainer'>
                <img src={jetairways} alt='client'/>
                </div>
                <div className='imageContainer'>
                <img src={apartlogo}  alt='client' className='apartlogo' style={{width:"100px"}}/>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Process;
