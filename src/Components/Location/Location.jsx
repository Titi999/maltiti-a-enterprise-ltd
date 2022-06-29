import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from "styled-components";

const Container = styled.section``;

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 9.4778122,
  lng: -0.88135407
};

class Location extends Component {
  render() {
    return (
      <Container className="gallery" id="gallery">
        <h1 className="heading">Our <span>Location</span></h1>
      <LoadScript
        googleMapsApiKey="AIzaSyC7kp94PJXor3UxV6ThQRZeqmQRn7LaFao"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          
        </GoogleMap>
      </LoadScript>
      </Container>
    )
  }
}

export default Location;