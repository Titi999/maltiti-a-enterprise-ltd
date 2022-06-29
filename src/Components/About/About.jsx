import React from "react";
import "./About.css";
import styled from "styled-components";
import about from '../../assets/4.jpg';



const Container = styled.section``;

const About = () => {
  
  
  return (
    <Container className="about" id="about">
        <div className="img">
            <img src={ about } alt=""/>
        </div>
        <div className="content">
            <div className="box">
                <h3>About <span>Us...</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt ab voluptatibus impedit animi, odit mollitia explicabo commodi ducimus molestiae error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt ab voluptatibus impedit animi, odit mollitia </p>
                <a href="#readmore" className="btn">read more</a>
            </div>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-address-card"></i>
                    <p>address card</p>
                </div>
                <div className="icons">
                    <i className="fas fa-award"></i>
                    <p>award cards</p>
                </div>
                <div className="icons">
                    <i className="fas fa-gift"></i>
                    <p>gift cards</p>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default About;
