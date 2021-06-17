import React from "react";
import "./about.scss";
import { about } from "../../assets/index";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="left_block">
          <img src={about} alt="about" />
        </div>
        <div className="right">
          <h2>ABOUT US</h2>
          <p>
            In the global competion of business every company must in need to
            perform the business operation in successful way.Brilliant Clouds
            transforms your business by increasing your productivity and
            delivering better customer experiences. Zoho SAAS business
            management suite any kind of business. Brilliant Clouds offers
            creating application for business,education,banking to the customers.
          </p><br/>
          <p>
            We have provided services to all various companies across the
            globe.It is essential for companies to propel growth, improve sales,
            and ultimately increase their bottom line. With a partner in Zoho we
            provide Sales,Support,HR and Accounting operations.We work with ease
            in every projects to satisfy your needs. Being a expertise in Zoho
            platform for 6 years we had tackled and provided solutions to our
            business partners and now they are working in an efficient way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
