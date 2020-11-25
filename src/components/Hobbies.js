import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageCards from "../cards/imageCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import keyboard from "../images/keyboard.jpg";
import crosstitch3 from "../images/crosstitch3.JPG";
import doily3 from "../images/doily3.JPG";
import hobbyData from "../hobbies.json";

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageCards.images,
      image: imageCards.images[0],
    };
    this.galleryImages = null;
    this.hobbies = hobbyData.hobbies;
    this.images = [keyboard, crosstitch3, doily3];
  }

  prevImg = () => {
    this.galleryImages.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  nextImg = () => {
    this.galleryImages.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <Container>
          <h4 className="mt-5">My Hobbies</h4>
          <hr></hr>
          <br></br>
          <Row className="mt-4 mb-4">
            {this.hobbies.map((hobby, index) => {
              return (
                <Col md={4} className="hobbyCard" key={index}>
                  <h5>{hobby.title}</h5>
                  <img
                    width={150}
                    height={150}
                    className="align-self-start mt-3 mb-3"
                    src={this.images[index]}
                    alt={hobby.image_title}
                  />
                  <p className="mt-3">{hobby.description}</p>
                </Col>
              );
            })}
          </Row>
          <div className="mt-5 mb-5 gallery">
            <button className="invisible-btn" onClick={() => this.prevImg()}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
            <div
              className="gallery-images"
              ref={(node) => {
                this.galleryImages = node;
              }}
            >
              {images.map((image) => {
                return (
                  <img
                    variant="top"
                    key={image.id}
                    src={image.image}
                    style={{ height: "200px", marginRight: "10px" }}
                    alt={"gallery"}
                  />
                );
              })}
            </div>
            <button className="invisible-btn" onClick={() => this.nextImg()}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
export default Hobbies;
