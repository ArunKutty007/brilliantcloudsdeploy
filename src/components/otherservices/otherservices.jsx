import React from "react";

import "./otherservices.scss";
import Tiltcard from "./tiltcaard/tiltcard";
import {react,ios,php,node} from '../../assets/index'

const Otherservices = () => {
  const data = [
    {
      img: react,
      title: "React JS",
      text: "We create interactive UIs , Design simple views for each state in your application",
    },
    {
      img: php,
      title: "PHP",
      text: "BY using PHP,we provide dynamic and interactive Web pages.",
    },
    {
      img: node,
      title: "NODE JS",
      text: "We create back-end API services designed with real-time, push-based architectures",
    },
    {
      img: ios,
      title: "IOS App",
      text: "We build easy to use mobile applications to solve everyday business needs.",
    },
  ];
  return (
    <div className="otherservices">
      <h1> Other Services</h1>
      <div className="servicescard">
          {
              data.map((d) => {
                return  <Tiltcard img={d.img}  title= {d.title} text={d.text}/>
              })
          }
      </div>
    </div>
  );
};

export default Otherservices;
