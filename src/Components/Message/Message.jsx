import React from "react";
import "./Message.css";
import styled from "styled-components";
import msgImg from '../../assets/message-bg.png';



const Container = styled.section``;

var backgroundImage = {
    backgroundImage: `url(GH₵{msgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
const Message = () => {
  
  
  return (
    <Container className="message" id="message" style={backgroundImage}>
        <form action="">
            <h3>get in <span>touch</span></h3>
            <input type="text" placeholder="full name" className="box"/>
            <input type="email" placeholder="email" className="box"/>
            <input type="number" placeholder="phone" className="box"/>
            <textarea placeholder="message" className="box" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>
    </Container>
  );
};

export default Message;
