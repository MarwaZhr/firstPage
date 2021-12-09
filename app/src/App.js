import React from "react";
import Coverflow from 'react-coverflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



import './App.scss';

export default function App() {
  const fn = function () {
    /* do your action */
  }
  return (
    <div>
      <div className="centerPosition">
        <img style={{ width: "200px" }} src="./images/logo1-01.png" alt="logo" />
        <p className="blockquote text-center para pb-4">Parce que, contrairement à Kaz, j'ai une conscience. J'ai une conscience, objecta Kaz. <br />Mais elle est discrète.Jesper rit.
          - Discrète ? Si tu as une conscience, elle est baillonnée et ligotée sur une chaise quelque part!</p>
          <div className="  pb-5 ">
        <iframe className="embed-responsive-item " src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
      </div>
      
      <Coverflow
        width={1060}
        height={580}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        infiniteScroll={true}
        enableScroll={true}
      >
        <div
          // onClick={() => fn()}
          // onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src='./images/img1.jpg'
            alt='title or description'
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <img src='./images/img2.jpg' alt='title or description' />
        <img src='./images/img3.jpg' alt='title or description' />
        <img src='./images/img6.jpg' alt='title or description' />
        <img src='./images/img7.jpg' alt='title or description' />
        <img src='./images/img8.jpg' alt='title or description' />
        <img src='./images/img9.jpg' alt='title or description' />
        <img src='./images/img4.jpg' alt='title or description' />
        <img src='./images/img10.jpg' alt='title or description' />
        <img src='./images/img5.jpg' alt='title or description' />
        <img src='./images/img11.jpg' alt='title or description' />
        <img src='./images/img12.jpg' alt='title or description' />
        <img src='./images/img15.jpg' alt='title or description' />
        <img src='./images/img13.jpg' alt='title or description' />
        <img src='./images/img14.jpg' alt='title or description' />
        <img src='./images/img16.jpg' alt='title or description' />

      </Coverflow>
      <div className="d-flex justify-content-center support pt-3 pb-3">
        <a href="https://www.facebook.com/EnfaiteOfficial/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/_enfaite/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
}