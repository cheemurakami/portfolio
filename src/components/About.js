import React from "react";
import { Container, Media } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
import imageCards from "../cards/imageCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
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
          <Media className="mt-5">
            <img
              width={150}
              height={150}
              className="align-self-start mr-3"
              src={cheeLogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h4>Media Heading</h4>
              <p className="pullLeft">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

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
export default About;
