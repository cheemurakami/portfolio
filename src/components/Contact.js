import { Container, Image, Row } from "react-bootstrap";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cheeLogo from "../images/cheeLogo.jpg";

function Contact() {
  return (
    <React.Fragment>
      <Container>
        <h4 className="mt-5">Contact</h4>
        <hr></hr>
        <br></br>
        <Row>
          <Image
            className="logoImage"
            src={cheeLogo}
            roundedCircle
            width={150}
            height={150}
          />
        </Row>
        <Row className="text">kiwipom1031[at]gmail.com</Row>
        <Row className="contact-links">
          <a
            href="https://github.com/cheemurakami"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} size="3x" />
          </a>

          <a
            href="https://www.linkedin.com/in/chee-murakami/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" />
          </a>

          <a
            href="https://www.instagram.com/kiwimurakami/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} size="3x" />
          </a>

          <a
            href="https://twitter.com/kiwipom31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} size="3x" />
          </a>
        </Row>
        <Row className="text">© 2021 by Chisato Murakami. </Row>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
