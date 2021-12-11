import React from "react";
// import Coverflow from 'react-coverflow';
import ControlledCarousel from './carousel.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



import './App.scss';

export default function App() {

  return (
    <div>
      <div className="centerPosition ">
        <img style={{ width: "200px" }} src="./images/logo1-01.png" alt="logo" />
      </div>
      <div className="centerPosition ">
        <p className="para ">
          Enfaite is a brand that represents singularity, passion and energy. <br />
          Our vision and identity are based and fueled by where we come from
          and the change we want to make around us.<br /> We combines the finest
          quality materials with an extreme attention to details. <br />
          Enfaite is a travel in time to let you wear your history and write
          your future in the best way.
          <br />With love.
        </p>
      </div>

      <div className="d-flex justify-content-center top1 pb-4 ">
        <iframe className="embed-responsive-item " style={{ width: "500px" }} src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
      <div className="centerPosition pt-3 pb-5">
        <p style={{ color: "#e4341a" }}>GET YOUR ‘’ MAELSTROM ‘’ NOW, ON</p>
        <div className="d-flex justify-content-center support">
          <a href="https://www.facebook.com/EnfaiteOfficial/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/_enfaite/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className=" support " style={{ color: "#fff" }}>
          <FontAwesomeIcon icon={faPhoneAlt} />
          {'   55 994 394 – 58 799 448'}
        </div>
      </div>
      <div className="pb-5">
        <ControlledCarousel />
      </div>
      <div className="para centerPosition pb-5">
        <p>We are working To launch our website as soon as possible.<br />
          Keep in touch !
        </p>
      </div>
    </div>
  );
}