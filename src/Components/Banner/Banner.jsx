import React from "react";
import "./Banner.css";
import styled from "styled-components";
import backgroudImg from '../../assets/banner-bg.jpg';

const Container = styled.section``;

const Banner = () => {
    var backgroundImage = {
        backgroundImage: `url(${backgroudImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
  
  return (
    <Container className="banner" style={ backgroundImage }>
        <div className="content">
            <span>special <span>offer</span></span>
            <h3>upto 50% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. farhan  Hic, error.ipsum dolor sit amet consectetur,</p>
            <a href="#shopnow" className="btn">shop now</a>
        </div>
    </Container>
  );
};

export default Banner;
