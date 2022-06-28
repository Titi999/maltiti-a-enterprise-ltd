import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      adaptiveHeight: 50000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <section>
        <br/><br/><br/><br/><br/><br/>
        <h1 className="heading">Our <span>Partners</span></h1>
        <Slider {...settings}>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png"/>
          </div>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png"/>
          </div>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png"/>
          </div>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png"/>
          </div>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png"/>
          </div>
          <div>
          <img alt="" src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png"/>
          </div>
        </Slider>
      </section>
    );
  }
}




