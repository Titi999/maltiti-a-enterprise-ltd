/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Staff.css";
import styled from "styled-components";



const Container = styled.section``;


const Staff = () => {
  
  return (
    <Container className="staff">
        <div id="cubeContainer">
	        <div id="cubeWrapper">
                <div className="head">
                    <h1>MEET OUR STAFF</h1>
                </div>
		        <div id="cubes">
			        <div className="cube p1">
                        <div className="name">
                            <h1>Rabiatu Abukari</h1>
                            <p>C.E.O</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        <div className="content">
                            <ul>
                                <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
	        				</ul>
			        	</div>
			        </div>
			        <div className="cube p2">
                    <div className="name">
                        <h1>Kassim Imoro</h1>
                        <p>Manager</p>
                    </div>
                    <div className="innerBorder"></div>
                    <div className="darken"></div>
                    <div className="content">
                        <ul>
                            <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
                        </ul>
				    </div>
			    </div>
			    <div className="cube p3">
                    <div className="name">
                        <h1>Chris</h1>
                        <p>Web Developer</p>
                    </div>
                    <div className="innerBorder"></div>
                    <div className="darken"></div>
                    <div className="content">
                        <ul>
                            <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
                        </ul>
				    </div>
			    </div>
			    <div className="cube p4">
                    <div className="name">
                        <h1>James</h1>
                        <p>UX / UI Designer</p>
                    </div>
                    <div className="innerBorder"></div>
                    <div className="darken"></div>
                    <div className="content">
                        <ul>
                            <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
                        </ul>
				    </div>
			    </div>
			    <div className="cube p5">
                    <div className="name">
                        <h1>Rebecca</h1>
                        <p>Graphics Designer</p>
                    </div>
                    <div className="innerBorder"></div>
                    <div className="darken"></div>
                    <div className="content">
                        <ul>
                            <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
                        </ul>
				    </div>
			    </div>
			    <div className="cube p6">
                    <div className="name">
                        <h1>James</h1>
                        <p>UX / UI Designer</p>
                    </div>
                    <div className="innerBorder"></div>
                    <div className="darken"></div>
                    <div className="content">
                        <ul>
                            <li><a href="#link"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#link"><span className="fab fa-facebook-f"></span></a></li>
                            <li><a href="#link"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#link"><span className="fab fa-youtube"></span></a></li>
                        </ul>
                    </div>
			    </div>
		    </div>
		<div className="moreTeam"><a href="#link"><span>Meet more of the team</span><span className="fas fa-angle-right"></span></a></div>
	</div>
</div>
    </Container>
  );
};

export default Staff;
