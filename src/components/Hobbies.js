import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageCards from "../cards/imageCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
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
      behavior: "smooth"
    })
  };

  nextImg = () => {
    this.galleryImages.scrollBy({
      left: 200,
      behavior: "smooth"
    })
  };

  render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <Container>

          <h3>My Hobbies</h3>
        <Row className="mt-3 mb-3">
          <Col md={4}>
            <h5>Keyboard</h5>
            <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={keyboard}
                alt="keyboard"
              />
            <p className="mt-3">I started playing keyboard when I was 4. Since then I played and listened to any kind of music. Recently I play 2000s punk/ rocks most of the time. I sometimes compose my own music too. I also love going to concerts to see my favorite bands!( ﾉ^ω^)ﾉ</p>
          </Col>
          <Col md={4}>
            <h5>Cross stitch</h5>
            <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={crosstitch3}
                alt="crosstitch3"
              />
            <p className="mt-3">Crossstitch is a one of creative hobbies of mine because I can design my own patterns with words easily! It doesn't require you to know the patterns of stitches. It does take time to finish, but it is nice to keep working on a project!</p>
          </Col>
          <Col md={4}>
            <h5>Crochet</h5>
            <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={doily3}
                alt="doily3"
              />
            <p className="mt-3">Crochet is my another hobby to keep my spare time busy. Since I like flowers and candles, I make doilies for those placemats! Sometimes I make hair accessories too. Also my cat loves bothering me with my yarn and thread while I'm crocheting!</p>
          </Col>
        </Row>
          <div className="mt-5 gallery">

          
            <button className="invisible-btn" onClick={() => this.prevImg()}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x"/>
            </button>
            <div className="gallery-images" ref={node => {
            this.galleryImages = node
          }}>
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
             <FontAwesomeIcon icon={faAngleRight} size="3x"/>
            </button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
export default Hobbies;

