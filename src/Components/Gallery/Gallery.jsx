import React from "react";
import "./Gallery.css";
import styled from "styled-components";
import gallery1 from '../../assets/gallery-img-1.jpeg';
import gallery2 from '../../assets/gallery-img-2.jpeg';
import gallery3 from '../../assets/gallery-img-3.jpeg';
import gallery4 from '../../assets/gallery-img-4.jpeg';
import gallery5 from '../../assets/gallery-img-5.jpeg';
import gallery6 from '../../assets/gallery-img-6.jpeg';



const Container = styled.section``;

const Gallery = () => {
  
  
  return (
    <Container className="gallery" id="gallery">
        <h1 className="heading">our <span>gallery</span></h1>
        <div className="box-container">

        <div className="box">
            <img alt="" src={ gallery1 }/>
            <div className="content">
                <h3>face</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery2}/>
            <div className="content">
                <h3>eyes</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="#readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery3}/>
            <div className="content">
                <h3>lips</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="readmore" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img alt="" src={gallery4}/>
            <div className="content">
                <h3>hairs</h3>
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
                <h3>skin care</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <a href="readmore" className="btn">read more</a>
            </div>
        </div>

    </div>
    </Container>
  );
};

export default Gallery;
