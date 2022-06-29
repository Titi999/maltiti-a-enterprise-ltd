import React from "react";
import "./Slider.css";
import styled from "styled-components";
import sliderImage from '../../assets/blog-2.jpg';
import sliderImage1 from '../../assets/2.jpg';
import sliderImage2 from '../../assets/3.jpg';

const Container = styled.section``;

var backgroundImage = {
    backgroundImage: `url(${sliderImage})`,
    backgroundSize: "300px 100px;",
    backgroundPosition: "center"
  };

var backgroundImage1 = {
backgroundImage: `url(${sliderImage1})`,
backgroundSize: "cover",
backgroundPosition: "center"
};

var backgroundImage2 = {
backgroundImage: `url(${sliderImage2})`,
backgroundSize: "cover",
backgroundPosition: "center"
};

const Slider = () => {
  let index = 0;

function next() {
  document.querySelectorAll('.home .slide')[index].classList.remove('active');
    index = (index + 1) % document.querySelectorAll('.home .slide').length;
    document.querySelectorAll('.home .slide')[index].classList.add('active');
}

function prev() {
  document.querySelectorAll('.home .slide')[index].classList.remove('active');
    index = (index - 1 + document.querySelectorAll('.home .slide').length) % document.querySelectorAll('.home .slide').length;
    document.querySelectorAll('.home .slide')[index].classList.add('active');
}
  
  return (
    <Container className="home" id="home">
      <div className="slide active" style={ backgroundImage }>
            <div className="content">
                <span>MALTITI A.<br/>ENTERPRISE LIMITED</span>
                <h3>"We want to improve the lives of women in Northern Ghana with the power of the shea nut 
                </h3>
                <a href="#readmore" className="btn">read more</a>  
            </div>
      </div>

      <div className="slide" style={ backgroundImage1 }>
            <div className="content">
            <span>MALTITI A.<br/>ENTERPRISE LIMITED</span>
                <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor farhan ut labore et dolore magna aliqua.<br/>
                    Lorem, ipsum dolor 
                </h3>
                <a href="#readmore" className="btn">read more</a>  
            </div>
    </div>

    <div className="slide" style={ backgroundImage2 }>
            <div className="content">
                <span>MALTITI A.<br/>ENTERPRISE LIMITED</span>
                <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor farhan ut labore et dolore magna aliqua.<br/>
                    Lorem, ipsum dolor 
                </h3>
                <a href="#readmore" className="btn">read more</a>  
            </div>
    </div>

    <div id="next-slide" onClick={ next } className="fas fa-angle-right"></div>
    <div id="prev-slide" onClick={ prev } className="fas fa-angle-left"></div>
    </Container>
  );
};

export default Slider;
