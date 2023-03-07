import React, { useState } from "react";
import footerLogo from "../Assets/footerLogo.svg";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import USA from "../Assets/USA.svg";
import Uk from "../Assets/Uk.svg";
import ZAR from "../Assets/ZAR.svg";
import KEN from "../Assets/KEN.svg";
import EUR from "../Assets/EUR.svg";
import GHN from "../Assets/GHN.svg";
import NGN from "../Assets/Nigeria.svg";
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";
import youtube from "../Assets/youtube.svg";
import tiktok from "../Assets/ph_tiktok-logo-thin (1).svg";
import facebook from "../Assets/facebook.svg";

// import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    console.log(e);
    // TODO
  };
  function handleEmailChange(e) {
    const value = e.target;
    setEmail(value);
  }

  return (
    <footer className="footer">
      <Container className="text-white">
        <img src={footerLogo} className="footer-logo" />
        <div className=" d-flex footer-container">
          <div className="tr">
            <div className="subscribe ">
              <span className="d-block">234 8135628192</span>
              <span>cc@smartshopper.com</span>

              <form onSubmit={handleSubmit} className="subscribe-form">
                <label className="d-block">Subscribe to this news letter</label>
                <div className="d-flex">
                <input
                  aria-label="Your email address"
                  name="email_address"
                  placeholder="Your email address"
                  required
                  type="email"
                  className="email-input"
                  onChange={handleEmailChange}
                  value={email}
                />
                <Button className="btn-subscribe">SUBSCRIBE</Button>
                </div>
               
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between  footer-links">
            <div className="d-flex cq justify-content-between">
              <div className="company d-flex flex-column">
                <h3>Company</h3>
                <Link to="/about" className="link">
                  About US
                </Link>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
                <Link to="/privacy" className="link">
                  Privacy Policy
                </Link>
                <Link to="/shipping" className="link">
                  Shipping Policy
                </Link>
                <Link to="/terms" className="link">
                  Terms & Conditions
                </Link>
                <Link to="/faq" className="link">
                  FAQ
                </Link>
              </div>
              <div className="quicklinks d-flex flex-column text-white">
                <h3>Quick Links</h3>
                <Link to="/" className="link">
                  <img src={USA} />
                  USA
                </Link>
                <Link to="/" className="link">
                  <img src={Uk} />
                  UK
                </Link>
                <Link to="/" className="link">
                  <img src={ZAR} />
                  ZAR
                </Link>
                <Link to="/" className="link">
                  <img src={EUR} />
                  EUR
                </Link>
                <Link to="/" className="link">
                  <img src={KEN} />
                  KEN
                </Link>
                <Link to="/" className="link">
                  <img src={NGN} />
                  NGN
                </Link>
                <Link to="/" className="link">
                  <img src={GHN} />
                  GHN
                </Link>
              </div>
            </div>

            <div className="followUs d-flex flex-column">
              <h3>Follow Us</h3>
              <Link className="link">
                <img src={facebook} />
                Facebook
              </Link>
              <Link className="link">
                <img src={twitter} />
                Twitter
              </Link>
              <Link className="link">
                <img src={instagram} />
                Instagram
              </Link>
              <Link className="link">
                <img src={youtube} />
                Youtube
              </Link>
              <Link className="link">
                <img src={tiktok} />
                Tiktok
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
