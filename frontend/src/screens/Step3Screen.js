import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import shopping from "../Assets/undraw_shopping_app_flsj (1) 1.png";

function Step3Screen() {
  return (
    <Container className="text-center step1">
      <img src={`${shopping}`} className="step--image" />
      <p>Enjoy a stress free shopping with voice-to-cart</p>

      <div className="smallCircles d-flex justify-content-between">
        <span></span>
        <span></span>
        <span className="selected"></span>
      </div>
      <div className="welcome-btn d-flex justify-content-evenly">
        <Link
          to="/signup"
          className="text-decoration-none text-white welcome--link"
        >
          Get Started
        </Link>
      </div>
    </Container>
  );
}

export default Step3Screen;
