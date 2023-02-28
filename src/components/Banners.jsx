import React from "react";
import banner1 from "../img/bannerImg-1.png";
import banner2 from "../img/bannerImg-3.png";
import "./banner.css";

const Banners = () => {
  return (
    <section className="banner-container">
      <div className="banner">
        <h1>my name is khagn</h1>
        <img src={banner1} alt="" />
        <div className="content">
          <h3>special offer</h3>
          <p>upto 25% off on mangos</p>
        </div>
      </div>
      <h1>hii </h1>

      <div className="banner">
        <img src={banner2} alt="" />
        <div className="content">
          <h3>limited offer</h3>
          <p>upto 30% off on juices</p>
        </div>
      </div>

      <div className="banner">
        <img src={banner2} alt="" />
        <div className="content">
          <h3>limited offer</h3>
          <p>upto 30% off on juices</p>
        </div>
      </div>
    </section>
  );
};

export default Banners;
