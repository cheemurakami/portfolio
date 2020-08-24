import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cheeLogo from "../images/cheeLogo.jpg";
import intern from "../images/intern.png";
import imageCards from "../cards/imageCards";
import { Link } from "react-router-dom";

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
              Hi there! I am Chee. I am a junior web developer based in Portland, Oregon. I enjoy creating apps with React. Before my coding bootcamp, I worked as a sales representative at an asian foods distributor, managing accounts for restaurants and markets. Before that I studied English literature in Japan. When I am not coding, I am either playing keyboard, doing cross stitch, or crocheting with my cat Kiwi!
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
              During my schooling at <a href="https://www.epicodus.com/" >Epicodus</a> I have created dozens of apps using JavaScript, Ruby on Rails, React with Redux, and others. Learned best practices such as TDD, BDD, and along with over 800 hours of programing work. Recently I built a React and Rails flower shop app with authentication, search/ filters, and CRUD functionality. <Link as={Link} to="/projects">See my projects.</Link>
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
              I am currently doing an internship at a company called <a href="https://flight.run/">Flight</a>, building an app in Angular, TypeScript and Firebase. I have really enjoyed learning and building the frontend and would like to do something similar.
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
