import React from "react";
import "./Gallery.css";
import styled from "styled-components";
import gallery1 from '../../assets/7.jpg';
import gallery2 from '../../assets/8.jpg';
import gallery3 from '../../assets/9.jpg';
import gallery4 from '../../assets/10.jpg';
import gallery5 from '../../assets/11.jpg';
import gallery6 from '../../assets/12.jpg';



const Container = styled.section``;

const Gallery = () => {
  
  
  return (
    <Container className="gallery" id="gallery">
        <h1 className="heading">our <span>gallery</span></h1>
        <div className="box-container">

        <div className="box">
            <img alt="" src={ gallery1 }/>
            <div className="content">
                <h3>Mixing</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery2}/>
            <div className="content">
                <h3>Kneading</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery3}/>
            <div className="content">
                <h3>Grinding Mill</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery4}/>
            <div className="content">
                <h3>Roasting</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery5}/>
            <div className="content">
                <h3>make up</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery6}/>
            <div className="content">
                <h3>Roasting</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="readmore" className="btn">read more</a>
            </div>
        </div>

    </div>
    </Container>
  );
};

export default Gallery;
