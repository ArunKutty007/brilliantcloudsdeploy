import React from 'react'
import './services.scss'
import Card from './card/card'
import {crm,desk,inventory,people,subscription,sales,analytics,book} from '../../assets/index'
import creator from '../../assets/creator.png'
const Services = () => {
    const data = [
        {
          img:creator,
          info: "It is to create custom applications to automate business processes or workflows, analyze the data in reports",
          title: "Zoho Creator",
        },
        {
          img: crm,
          info: "It is an online Sales CRM software that manages your sales, marketing and support in one CRM platform",
          title: "Zoho CRM",
        },
        {
          img: book,
          info: "It is online accounting software that manages your finances, automates business workflows",
          title: "Zoho Books",
        },
        {
          img: subscription,
          info: "Handle the entire customer subscription billing life cycle · Pricing plan information Add flexibility to the signup process.",
          title: "Zoho Subscription",
        },
        {
          img: analytics,
          info: "It is a self-service business intelligence and analytics software which helps you create dashboards and analyze data",
          title: "Zoho Analytics",
        },
        {
          img: inventory,
          info: "Zoho Inventory is a powerful tool that will help to increase your sales and keep track of every unit in your inventory.",
          title: "Zoho Inventory",
        },
        {
          img: people,
          info: "It is your complete online HR solution to automate and simplify your HR operations.2",
          title: "Zoho People",
        },
        {
          img: sales,
          info: "It provides comprehensive set of tools to sell efficiently across channels with a structured and repeatable sales",
          title: "Zoho Sales",
        },
        {
            img: desk,
            info: "It is context-aware customer service software that helps you put your customers at the heart of the company.",
            title: "Zoho Desk",
        }
      ];
    return (
        <div className="services" id="services">

            <div className="container"> 
            <h2>Services</h2>
            <p className="text">We provide all kind of services in Zoho Platform</p>
            <div className="cardContainer">
                {
                    data.map((d) => {
                        return <Card img={d.img} title={d.title} text={d.info} />
                    })
                }
                
            </div>
            
            </div>     
        </div>
    )
}

export default Services
