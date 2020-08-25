import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Image } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";

function Contact() {
  return (
    <React.Fragment>
      <Container>
        <h4 className="mt-5">Contact me!</h4>
        <hr></hr>
        <br></br>
        <Row>
          <Image
            className="logoImage mt-5 mb-5"
            src={cheeLogo}
            roundedCircle
            width={150}
            height={150}
          />
        </Row>

        <div className="contact">
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
        </div>
      </Container>
    </React.Fragment>
  );
}
//<i class="fab fa-linkedin-in"></i>
export default Contact;
