import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "./portfoliolist/portfolioList";
import { zohoone, creator, crm, desk } from "../../data";
import Model from '../portfolio/models/model';

const Portfolio = () => {
  const [selected, setSelected] = useState("zohoone");
  const [isModal,setIsModal]=useState()
  const [data, setdata] = useState([]);

  const list = [
    {
      id: "zohoone",
      title: "Zoho One",
    },
    {
      id: "creator",
      title: "Zoho Creator",
    },
    {
      id: "crm",
      title: "Zoho CRM",
    },
    {
      id: "desk",
      title: "Zoho Desk",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "zohoone":
        setdata(zohoone);
        break;
      case "creator":
        setdata(creator);
        break;
      case "crm":
        setdata(crm);
        break;
      case "desk":
        setdata(desk);
        break;

      default:
        setdata(zohoone);
    }
  }, [selected]);
  return (
    <>
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="wrapper">
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              id={item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d,variant) => {
          return (
            <div className="item" onClick={()=>setIsModal(variant)}>
              <img src={d.img} alt="imagelogo" />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  {isModal!==undefined&&  <Model isModal={isModal} setIsModal={setIsModal} />}
  {isModal!==undefined&&< div className="backdrop"></div>}
    </>
  );
};

export default Portfolio;
