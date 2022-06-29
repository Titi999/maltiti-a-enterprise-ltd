/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Shop.css";
import styled from "styled-components";
import product1 from '../../assets/product-1.jpg';
import product2 from '../../assets/product-2.jpeg';
import product3 from '../../assets/product-3.jpg';
import product4 from '../../assets/product-4.jpg';
import product5 from '../../assets/product-5.jpeg';
import product6 from '../../assets/product-6.jpg';



const Container = styled.section``;

const Shop = () => {
  
  
  return (
    <Container className="shop" id="shop">
        <h1 className="heading">our <span>shop</span></h1>
        <div className="box-container">

        <div className="box">
            <div className="img">
                <img alt="" src={ product1 }/>
                <div className="icons">
                    <a href="#eye" className="fas fa-eye"></a>
                    <a href="#heart" className="fas fa-heart"></a>
                    <a href="#share" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>airbrush matte</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#cart" className="btn">add to cart</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
                <img alt="" src={ product2 }/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>lactic acid treatment</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#addcart" className="btn">add to cart</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
                <img alt="" src={ product3 }/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>midnight must</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#cart" className="btn">add to cart</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
                <img alt="" src={ product4 }/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>face & body foundation</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#" className="btn">add to cart</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
                <img alt="" src={ product5 }/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>eyeliner pack</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#" className="btn">add to cart</a>
            </div>
        </div>

        <div className="box">
            <div className="img">
                <img alt="" src={ product6 }/>
                <div className="icons">
                    <a href="#" className="fas fa-eye"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>moisture balam</h3>
                <div className="price">GH₵40-<span>GH₵200.99</span></div>
                <a href="#" className="btn">add to cart</a>
            </div>
        </div>

    </div>
    </Container>
  );
};

export default Shop;
