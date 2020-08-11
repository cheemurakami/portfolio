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
            <h4>Keyboard</h4>
            <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={keyboard}
                alt="keyboard"
              />
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.</p>
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
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.</p>
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
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.</p>
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

