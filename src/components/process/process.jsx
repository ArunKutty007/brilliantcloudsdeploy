import React from "react";
import "./process.scss";
import {apartlogo,medico,jetairways,eton} from '../../assets/index'
const Process = () => {
  const data = [
    {
      title: "Design",
      text: "Creating a structure for the project",
    },
    {
      title: "Development",
      text: "Start coding according to the requirements",
    },
    {
      title: "Testing",
      text: "Testing before the software is delivered to customers",
    },
    {
      title: "Delivey",
      text: "Time to deploy to production",
    },
    {
      title: "Maintenenace",
      text: "Looks after any post-production issues",
    },
  ];
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
        <div className="right"></div>
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
