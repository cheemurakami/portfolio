import { Badge, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import Skills from "./Skills";
import cheeOmma from "../images/cheeOmma.JPG";
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
          <h4 className="mt-5">
            Hi I'm Chisato, please call me Chee ヽ(*・ω・)ﾉ
          </h4>
          <hr></hr>
          <Row className="mt-5 mb-5">
            <Col xs={12} md={3} className="mt-3 mb-3">
              <img
                width={175}
                height={175}
                className="align-self-start mr-3"
                src={cheeOmma}
                alt="cheeOmma"
              />
            </Col>

            <Col xs={12} md={9} className="mt-3 mb-3 pl-4">
              <h4>Software Engineer</h4>
              <h5>Portland, OR SEP 2020 - presemt</h5>
              <p className="pullLeft">
                Hi there! I'm Chee. I'm a software engineer based in Portland,
                Oregon. I enjoy creating apps with React and Ruby on Rails, and
                I'm eager to learn more! When I am not coding, I am either
                playing keyboard, doing cross stitch, or crocheting with my cat
                Kiwi!
              </p>
              <Badge pill variant="secondary">
                coding
              </Badge>{" "}
              <Badge pill variant="secondary">
                cat
              </Badge>{" "}
              <Badge pill variant="secondary">
                music
              </Badge>{" "}
              <Badge pill variant="secondary">
                crochet
              </Badge>{" "}
              <Badge pill variant="secondary">
                crossstitch
              </Badge>{" "}
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col xs={12} md={3} className="mt-3 mb-3">
              <img
                width={175}
                height={175}
                className="align-self-start mr-3"
                src="https://wjm.s3.amazonaws.com/maclist/uploads/EyeCue+Lab+LLC_1602893511.png"
                alt="internLogo"
                style={{ backgroundColor: "white" }}
              />
            </Col>

            <Col xs={12} md={9} className="mt-3 mb-3 pl-4">
              <h4>Software Engineer Internship</h4>
              <h5>EyeCue Lab, OCT 2020 - DEC 2020</h5>
              <p className="pullLeft">
                I have recently finished my second internship at a company
                called{" "}
                <a
                  href="https://www.eyecuelab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EyeCue Lab
                </a>
                . I built a habit tracker/activity suggestion app using React
                Native. I have really enjoyed learning mobile development and
                working on the frontend and would like to do something similar!
                Check my project{" "}
                <Link
                  style={{ color: "skyblue" }}
                  as={Link}
                  to="/projects#brio"
                >
                  here!
                </Link>
              </p>
              <Badge pill variant="secondary">
                React Native
              </Badge>{" "}
              <Badge pill variant="secondary">
                Expo
              </Badge>{" "}
              <Badge pill variant="secondary">
                Redux Persist
              </Badge>{" "}
              <Badge pill variant="secondary">
                Redux Saga
              </Badge>{" "}
              <Badge pill variant="secondary">
                Node.js
              </Badge>{" "}
              <Badge pill variant="secondary">
                React Native Paper
              </Badge>{" "}
              <Badge pill variant="secondary">
                Spotify API
              </Badge>{" "}
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col xs={12} md={3} className="mt-3 mb-3">
              <img
                width={175}
                height={175}
                className="align-self-start mr-3"
                src="https://flight.run/assets/flight-logo.svg"
                alt="internLogo2"
                style={{ backgroundColor: "white" }}
              />
            </Col>

            <Col xs={12} md={9} className="mt-3 mb-3 pl-4">
              <h4>Software Engineer Internship</h4>
              <h5>Flight, AUG 2020 - SEP 2020</h5>
              <p className="pullLeft">
                I did my first internship at a company called{" "}
                <a
                  href="https://flight.run/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flight
                </a>
                . I worked on a mobile social networking app using TypeScript
                and Angular. I used RxJS library for composing asynchronous
                programs with Firebase.
              </p>
              <Badge pill variant="secondary">
                TypeScript
              </Badge>{" "}
              <Badge pill variant="secondary">
                Angular
              </Badge>{" "}
              <Badge pill variant="secondary">
                RxJS
              </Badge>{" "}
              <Badge pill variant="secondary">
                Firebase
              </Badge>{" "}
              <Badge pill variant="secondary">
                Firestore
              </Badge>{" "}
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col xs={12} md={3} className="mt-3 mb-3">
              <img
                width={175}
                height={175}
                className="align-self-start"
                src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1880/s300/epicodus-ico.png"
                alt="epiLogo"
              />
            </Col>
            <Col xs={12} md={9} className="mt-3 mb-3 pl-4">
              <h4>Epicodus Coding Bootcamp</h4>
              <h5>MAR 2020 - SEP 2020</h5>
              <p className="pullLeft">
                During my schooling at{" "}
                <a href="https://www.epicodus.com/">Epicodus</a> I have created
                dozens of apps using JavaScript, Ruby on Rails, React with
                Redux, and others. Learned best practices such as TDD, BDD, and
                along with over 1000 hours of programing work. Check my personal
                projects{" "}
                <Link style={{ color: "skyblue" }} as={Link} to="/projects">
                  here!
                </Link>
              </p>
              <Badge pill variant="secondary">
                React JS
              </Badge>{" "}
              <Badge pill variant="secondary">
                Redux
              </Badge>{" "}
              <Badge pill variant="secondary">
                NPM
              </Badge>{" "}
              <Badge pill variant="secondary">
                Firebase
              </Badge>{" "}
              <Badge pill variant="secondary">
                Firestore
              </Badge>{" "}
              <Badge pill variant="secondary">
                Ruby on Rails
              </Badge>{" "}
              <Badge pill variant="secondary">
                gems
              </Badge>{" "}
            </Col>
          </Row>
          <Skills />
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;
