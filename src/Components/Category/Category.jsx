import React from "react";
import "./Category.css";
import styled from "styled-components";
import cat1 from '../../assets/category-1.png';
import cat2 from '../../assets/category-2.png';
import cat3 from '../../assets/category-3.png';
import cat4 from '../../assets/category-4.png';
// import cat5 from '../../assets/category-5.png';
// import cat6 from '../../assets/category-6.png';


const Container = styled.section``;

const Category = () => {
  
  
  return (
    <Container className="category" id="home">
        <div className="box-container">

            <a href="#a" className="box">
                <img alt="pomade" src={ cat1 }/>
                <h3>Sheabutter Related products</h3>
            </a>

            <a href="#b" className="box">
                <img alt="soaps" src={ cat2 }/>
                <h3>Dawadawa Related Products</h3>
            </a>

            <a href="#c" className="box">
                <img alt="dawadawa" src={ cat3 }/>
                <h3>Soap Related Products</h3>
            </a>

            <a href="#d" className="box">
                <img alt="raw sheabutter" src={ cat4 }/>
                <h3>Essential Oils</h3>
            </a>

            {/* <a href="#e" className="box">
                <img alt="" src={ cat5 }/>
                <h3>makeup</h3>
            </a>

            <a href="#f" className="box">
                <img alt="" src={ cat6 }/>
                <h3>fragrance</h3>
            </a> */}

</div>
    </Container>
  );
};

export default Category;
