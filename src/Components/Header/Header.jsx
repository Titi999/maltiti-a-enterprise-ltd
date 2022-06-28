/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.css";
import styled from "styled-components";
import {useEffect} from "react";

const Container = styled.header``;

const Header = () => {
  useEffect(() => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

  window.onsroll = () => {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
  }
  });
  return (
    <Container className="App-header">
      
        <section id="header" className="header">
            <a href="#home" className="logo"><i className="fas fa-female"></i> Maltiti</a>
            <nav className="navbar">
                <a href="#home">home</a> 
                <a href="#about">about</a> 
                <a href="#shop">shop</a>  
                <a href="#gallery">gallery</a> 
                <a href="#message">message</a>
                <a href="#blogs">blogs</a> 
            </nav>

            <div className="icons">
                <div id="menu-btn" className="fas fa-bars"></div>
                {/* <a href="#home" class="fas fa-heart"></a>
                <a href="#home" class="fas fa-shopping-cart"></a> */}
            </div>
        </section>
    </Container>
  );
};

export default Header;