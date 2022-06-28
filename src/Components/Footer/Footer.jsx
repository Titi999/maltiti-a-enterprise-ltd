/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";
import styled from "styled-components";



const Container = styled.section``;


const Footer = () => {
  
  return (
    <Container className="footer">
        <div className="box-container">

            <div className="box">
                <h3>quick links</h3>
                <a className="link" href="#linkhome"> <i className="fas fa-angle-right"></i> home</a>
                <a className="link" href="#linkabout"> <i className="fas fa-angle-right"></i> about</a>
                <a className="link" href="#linkshop"> <i className="fas fa-angle-right"></i> shop</a>
                <a className="link" href="#linkgallery"> <i className="fas fa-angle-right"></i> gallery</a>
                <a className="link" href="#linkmessage"> <i className="fas fa-angle-right"></i> message</a>
                <a className="link" href="#linkblogs"> <i className="fas fa-angle-right"></i> blogs</a>
            </div>

            <div className="box">
                <h3>extra links</h3>
                <a className="link" href="#link"> <i className="fas fa-angle-right"></i> my favorite </a>
                <a className="link" href="#link"> <i className="fas fa-angle-right"></i> my order </a>
                <a className="link" href="#link"> <i className="fas fa-angle-right"></i> my wishlist </a>
                <a className="link" href="#link"> <i className="fas fa-angle-right"></i> private policy </a>
                <a className="link" href="#link"> <i className="fas fa-angle-right"></i> terms of use </a>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <a className="link" href="#link"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                <a className="link" href="#link"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                <a className="link" href="#link"> <i className="fas fa-envelope"></i> shaikhfarhan@gmail.com </a>
                <a className="link" href="#link"> <i className="fas fa-map"></i> mumbai, india - 401203 </a>
                <div className="share">
                    <a href="#link" className="fab fa-facebook-f"></a>
                    <a href="#link" className="fab fa-twitter"></a>
                    <a href="#link" className="fab fa-instagram"></a>
                    <a href="#link" className="fab fa-linkedin"></a>
                </div>
            </div>

            <div className="box">
                <h3>newsletter</h3>
                <p>subscribe for latest updates</p>
                <form action="">
                    <input type="email" name="" placeholder="enter your email" id="" className="email"/>
                    <input type="submit" value="subscribe" className="btn"/>
                </form>
            </div>

        </div>
        <div className="credit">Maltiti A. Enterprise Limited &copy;<span>2022</span> || all rights reserved! </div>
    </Container>
  );
};

export default Footer;
