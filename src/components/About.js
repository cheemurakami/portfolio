import React from "react";
import {
  Container,
  Media,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
import crossStitch from "../images/crossstitch.jpg";
import imageCards from "../cards/imageCards";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageCards.images,
      image: imageCards.images[0],
    };
  }

  prevImg = () => {
    console.log("PREV");
    const newIndex = this.state.image.index - 1;
    this.setState({
      image: imageCards.images[newIndex],
    });
  };

  nextImg = () => {
    console.log("NEXT");
    const newIndex = this.state.image.index + 1;
    this.setState({
      image: imageCards.images[newIndex],
    });
  };

  render() {
    const { images, image } = this.state;
    return (
      <React.Fragment>
        <Container>
          <Media className="mt-5">
            <img
              width={300}
              height={300}
              className="align-self-start mr-3"
              src={cheeLogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h1>Media Heading</h1>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

          <div className="mt-5">
            <button onClick={() => this.prevImg()} disabled={image.index === 0}>
              Prev
            </button>
            <button
              onClick={() => this.nextImg()}
              disabled={image.index === images.length - 1}
            >
              Next
            </button>
            </div>

            

                
                  <Card className="mt-5" style={{ width: "18rem" }} >
                <Card.Img variant="top" src={this.state.image.image}  />
            </Card>
             

        </Container>
      </React.Fragment>
    );
  }
}
export default About;
