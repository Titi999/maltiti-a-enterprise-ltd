import React from "react";
import "./Services.css";
import styled from "styled-components";
import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';


const Container = styled.section``;

const Services = () => {

  return (
    <Container className="services">
        <div className="box">
            <img src={icon1} alt=""/>
            <h3>free delivery</h3>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

        <div className="box">
            <img src={icon2} alt=""/>
            <h3>secure payments</h3>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

        <div className="box">
            <img src={icon3} alt=""/>
            <h3>24/7 support</h3>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

    </Container>
  );
};

export default Services;
