import React from "react";
import "./Blog.css";
import styled from "styled-components";
import blog1 from '../../assets/blog-1.jpg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';


const Container = styled.section``;

const Blog = () => {
  
  
  return (
    <Container className="blogs" id="blogs">
        <h1 className="heading">our daily <span>blogs</span></h1>
        <div className="box-container">
            <div className="box">
                <div className="img">
                    <img src={blog1} alt=""/>
                </div>
                <div className="content">
                    <div className="date">
                        <h3>12</h3>
                        <span>jan</span>
                    </div>
                    <a href="#user" className="user"><i className="fas fa-user"></i> by admin</a>
                    <a href="#title" className="title"> blog title goes here...</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a href="readmore" className="btn">read more</a>
                </div>
            </div>

            <div className="box">
                <div className="img">
                    <img src={blog2} alt=""/>
                </div>
                <div className="content">
                    <div className="date">
                        <h3>19</h3>
                        <span>feb</span>
                    </div>
                    <a href="user" className="user"><i className="fas fa-user"></i> by admin</a>
                    <a href="#title" className="title"> blog title goes here...</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a href="#readmore" className="btn">read more</a>
                </div>
            </div>

            <div className="box">
                <div className="img">
                    <img src={blog3} alt=""/>
                </div>
                <div className="content">
                    <div className="date">
                        <h3>02</h3>
                        <span>Aug</span>
                    </div>
                    <a href="#user" className="user"><i className="fas fa-user"></i> by admin</a>
                    <a href="#title" className="title"> blog title goes here...</a>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <a href="#readmore" className="btn">read more</a>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Blog;
