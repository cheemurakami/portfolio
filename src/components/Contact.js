import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact">
        <a href="https://github.com/cheemurakami" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faGithub} size="3x" />
        </a>

        <a href="https://www.linkedin.com/in/chee-murakami/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" />
        </a>

        <a href="https://www.instagram.com/kiwimurakami/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faInstagram} size="3x" />
        </a>
      </div>
    </React.Fragment>
  );
}
//<i class="fab fa-linkedin-in"></i>
export default Contact;
