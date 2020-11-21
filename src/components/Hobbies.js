import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageCards from "../cards/imageCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import keyboard from "../images/keyboard.jpg";
import crosstitch3 from "../images/crosstitch3.JPG";
import doily3 from "../images/doily3.JPG";

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageCards.images,
      image: imageCards.images[0],
    };
    this.galleryImages = null;
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
            <Col md={4} className="hobbyCard">
              <h5>Keyboard</h5>
              <img
                width={150}
                height={150}
                className="align-self-start mt-3 mb-3"
                src={keyboard}
                alt="keyboard"
              />
              <p className="mt-3">
                Keyboard is an important part of my life. Recently I play 2000s
                punk/ rocks. I compose my own music too.
                I also love going to concerts to see my favorite bands!( ﾉ^ω^)ﾉ
              </p>
            </Col>
            <Col md={4} className="hobbyCard">
              <h5>Cross stitch</h5>
              <img
                width={150}
                height={150}
                className="align-self-start mt-3 mb-3"
                src={crosstitch3}
                alt="crosstitch3"
              />
              <p className="mt-3">
                Crossstitch is a one of creative hobbies of mine because I love
                designing my own patterns with words!
              </p>
            </Col>
            <Col md={4} className="hobbyCard">
              <h5>Crochet</h5>
              <img
                width={150}
                height={150}
                className="align-self-start mt-3 mb-3"
                src={doily3}
                alt="doily3"
              />
              <p className="mt-3">
                Crochet is my another hobby to keep my spare time busy. Also my cat Kiwi loves
                bothering me with my yarn and thread!
              </p>
            </Col>
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
