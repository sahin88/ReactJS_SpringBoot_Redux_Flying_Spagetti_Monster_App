import React, { Component } from 'react';
import GoogleMap from "google-map-react";
import '../css/google_map.css'



export default class MapContainer extends Component {

  state = {
    center: { lat: 0, lng: 0 },
    markerCenter: { lat: 0, lng: 0 }
  };
  render() {
    return (
      <div className='google_map_css'>
      <GoogleMap zoom={5} center={this.state.center}>
      <img
        style={{width:'100%', height:'500px'}}
        src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
        lat={this.state.markerCenter.lat}
        lng={this.state.markerCenter.lng}
      />
    </GoogleMap>
    </div>
    );
  }
}

