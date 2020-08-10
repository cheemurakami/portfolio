import React from "react";
import { Container, Media } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
import imageCards from "../cards/imageCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
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

          
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
