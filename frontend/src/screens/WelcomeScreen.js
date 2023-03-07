import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Step1Screen from "./Step1Screen";

function Welcome() {
  return (
    <Container className="text-center welcome">
      <h1>Welcome to Smart Shopper</h1>
      <h2>Voice-to-cart e-commerce website</h2>
      <h3>What are you searching for today?</h3>
      <div className="welcome-btn d-flex justify-content-evenly">
        <Link
          to="/step1"
          className="text-decoration-none text-white welcome--link"
        >
          Proceed with voice
        </Link>
        <Link
          to="/step1"
          className="text-decoration-none text-white welcome--link"
        >
          Proceed with text
        </Link>
      </div>
    </Container>
  );
}

export default Welcome;
