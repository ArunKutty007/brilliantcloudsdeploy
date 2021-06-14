import React from "react";
import "./testimonials.scss";
import Card from "./card/card";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const data = [
    {
      name: "Aravindan L",
      work: "Senior Implementation Consultant",
      text: " Well Knowledged at what they do with a good technical expertise.Commitment level is great.",
    },
    {
      name: "DPR Enterprises",
      work: "Designer",
      text: "We really enjoy working with Prabakar. He has done a great job of tackling some complex issues for us, and we will continue to use him in the future",
    },
    {
      name: "MedicoService",
      work: "Store Owner",
      text: " I am working with Prabaka from almost year and a half and we have build a solid zoho creator, books, crm application that automates the business process in our company. The application covers the process of tracking of price lists, products purchased ordered and labeling with barcode labels. We keep communication together and in case of problems I could rely on Prabaka.",
    },
    {
      name: "Eton Technologies",
      work: "Directot",
      text: "Prabakaran did a good job in supporting zoho creator development for us.",
    },
    {
      name: "JP Gupta",
      work: "Director",
      text: " An excellent job with dynamic problem solvers that have the ability to creatively solve system development challenges. A pleasure to work with them.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="testimonials">
        
      <h1> Testimonials</h1>
      <Slider {...settings}>
      <Card name={data[0].name} text={data[0].text} work={data[0].work}/>
      <Card name={data[1].name} text={data[1].text} work={data[1].work}/>
      <Card name={data[2].name} text={data[2].text} work={data[2].work}/>
      <Card name={data[3].name} text={data[3].text} work={data[3].work}/>
      <Card name={data[4].name} text={data[4].text} work={data[4].work}/>

      </Slider>
     
      
     
    </div>
  );
};

export default Testimonials;
