import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
import intern from "../images/intern.png";
import imageCards from "../cards/imageCards";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageCards.images,
      image: imageCards.images[0],
    };
    this.galleryImages = null;
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mt-3 mb-3">
            <Col xs={12} md={3} className="mt-3">
              <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={cheeLogo}
                alt="cheeLogo"
              />
            </Col>

            <Col xs={12} md={9} className="mt-3">
              <h4>Media Heading</h4>
              <p className="pullLeft">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
          <Col xs={12} md={3} className="mt-3 ">
              <img
                width={150}
                height={150}
                className="align-self-start"
                src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1880/s300/epicodus-ico.png"
                alt="epiLogo"
              />
            </Col>
            <Col xs={12} md={9} className="mt-3">
              <h4>Epicodus</h4>
              <p className="pullLeft">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Col>
            
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12} md={3} className="mt-3">
              <img
                width={150}
                height={150}
                className="align-self-start mr-3"
                src={intern}
                alt="internLogo"
                style={{backgroundColor: "white"}}
              />
            </Col>

            <Col xs={12} md={9} className="mt-3">
              <h4>Internship</h4>
              <p className="pullLeft">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
