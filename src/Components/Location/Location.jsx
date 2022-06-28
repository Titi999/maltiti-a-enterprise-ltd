import React from "react";
import "./Location.css";
import styled from "styled-components";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



const Container = styled.section``;

const Location = () => {
  
  
  return (
    <Container>
        <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
 </InfoWindow>
</Map>
    </Container>
  );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAX--wRRY1096YG5_Psc0D09hrJ6Up8tx4")
  })(Location)
