import React from "react";
import "./Videos.css";
import styled from "styled-components";
import { Carousel } from 'react-bootstrap';
import vid1 from '../../assets/vid3.mp4';
import vid2 from '../../assets/vid1.mp4';
import vid3 from '../../assets/vid2.mp4';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';   


const Container = styled.section``;

const Videos = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: vid1
    },
    {
      id: 2,
      title: "Video 2",
      src: vid2
    },
    {
      id: 3,
      title: "Video 3",
      src: vid3
    }
  ]
  return (
    <Container>
      <h1 className="heading">Short <span>Videos</span></h1>
       <Carousel>
        {videoProperties.map((videoObj) => {
          return (
           <Carousel.Item key = {videoObj.id}>
            <ReactPlayer url={videoObj.src}
            width= "100%"
            pip={true}
            controls = {true}
          
            />
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
              
            </Carousel.Caption>
           </Carousel.Item> 
          );
        })}
       </Carousel>
    </Container>
  );
};

export default Videos;
