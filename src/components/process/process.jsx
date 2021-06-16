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
      title: "Delivey",
      text: "Time to deploy to production",
      img:delivery
    },
    {
      title: "Maintenenace",
      text: "Looks after any post-production issues",
      img:maintenance
    },
  ];

  const [img, setimg] = useState(design)
  return (
    <div className="process">
      <h1>Process</h1>
      <div className="procontainer">
        <div className="left">
          <div>
            {data.map((d) => {
              return (
                <div className="section">
                  <div className="info">
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                  </div>
                </div>
               
              );
            })}
          </div>
        </div>
        <div className="right">
          <img src={img} alt='process'/>
        </div>
      </div>
      <div className="clients">
            <h1>Clients</h1>
            <div className="clientcontainer">
                <div className="imagecontainer">
                <img src={eton} />
                <img src={medico}/>
                <img src={apartlogo}/>
                <img  src={jetairways}/>
                </div>
                
            </div>
      </div>
    </div>
  );
};

export default Process;
