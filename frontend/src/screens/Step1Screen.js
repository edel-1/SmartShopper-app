import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Circles from "../components/Circles";
import shopping from "../Assets/undraw_Shopping_re_hdd9 1.png";

function Step1Screen() {
  return (
    <Container className="text-center step1">
      <img src={`${shopping}`} className="step--image" />

      <p>Shop at your convenience with voice-to-cart</p>
      {/* <Circles/> */}
      <div className="smallCircles d-flex justify-content-between">
        <span className="selected"></span>
        <span></span>
        <span></span>
      </div>
      <div className="welcome-btn d-flex justify-content-evenly">
        <Link
          to="/home"
          className="text-decoration-none text-white welcome--link"
        >
          Skip
        </Link>
        <Link
          to="/step2"
          className="text-decoration-none text-white welcome--link"
        >
          Next
        </Link>
      </div>
    </Container>
  );
}

export default Step1Screen;
