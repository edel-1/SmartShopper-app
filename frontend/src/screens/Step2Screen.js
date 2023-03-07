import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import shopping from "../Assets/undraw_web_shopping_re_owap 1.png";

function Step2Screen() {
  return (
    <Container className="text-center step1">
      <img src={`${shopping}`} className="step--image" />
      <p>Easy, convenient and seamless</p>

      <div className="smallCircles d-flex justify-content-between">
        <span></span>
        <span className="selected"></span>
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
          to="/step3"
          className="text-decoration-none text-white welcome--link"
        >
          Next
        </Link>
      </div>
    </Container>
  );
}

export default Step2Screen;
