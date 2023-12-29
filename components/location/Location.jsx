import "./location.css";
import React from 'react';



function Location() {
    return (
        <div id="location-container">
          <div className="map">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!3m1!4b1!4m6!3m5!1s0x3bae122522e01d5d:0x1c03cb5b886ac7ec!8m2!3d12.9629354!4d77.7122996!16s%2Fg%2F1vb9bhlj?entry=ttu"
            width="100%"
            height="550"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
          </div>
          <div className="address">
            <h3>Our Address</h3>
            <p>AECS LAYOUT ,BROOKFIELD</p>
            <p>Marathalli,Bengaluru</p>
            <p>Karnataka 560037</p>
          </div>
        </div>
      );
    };

export default Location

 
