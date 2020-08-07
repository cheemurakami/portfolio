import React from "react";
import { Container, Media, Card } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
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
          <div className={`cards-slider active-slide-${image.index}`}>
            <div className='cards-slider-wrapper' style={{
              'transform': `translateX(-${image.index*(100/images.length)}%`
            }}>
              {
                images.map((image) => {
                  return(
                  <Card className="img-card" style={{ width: "18rem" }} key={image.id}>
                    <Card.Img variant="top" key={image.id} src={image.image} />
                  </Card>
                  )
                })
              }
            </div>
          </div>

        </Container>
      </React.Fragment>
    );
  }
}
export default About;
