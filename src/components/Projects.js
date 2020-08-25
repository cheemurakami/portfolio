import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Projects() {
  return (
    <React.Fragment>
      <Container>
        <h4 className="mt-5">My Projects</h4>
        <hr></hr>
        <br></br>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4} className="mt-3 mb-3">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                title="gurumi"
                src="https://www.loom.com/embed/572da294d5ae42879166a0d696f5f595"
                frameBorder={0}
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Col>

          <Col xs={12} md={8} className="mt-3 mb-3">
            <div>
              <a
                href="https://gurumi-the-florist.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Gurumi the Florist</h4>
                <p>
                  This is a CRUD app for managing flower products. Made with
                  React and Redux for frontend and Rails for backend using
                  Postgres database.
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4} className="mt-3 mb-3">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                title="record"
                src="https://www.loom.com/embed/29d68aa1af614889adbef37e5daeb437"
                frameBorder={0}
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={8} className="mt-3 mb-3">
            <div>
              <a
                href="https://record-collector-epiapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Record Collector</h4>
                <p>
                  This is a digital record collection catalog that helps a user
                  keep track of records in their collection and organize it by
                  specific parameters. Made with Ruby on Rails and Postgres
                  database.
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4} className="mt-3 mb-3">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                title="shelter"
                src="https://www.loom.com/embed/4eade8609ad24cc5a107ca62470d98c7"
                frameBorder={0}
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={8} className="mt-3 mb-3">
            <div>
              <a
                href="https://urban-tails-shelter.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Urban Tails Shelter</h4>
                <p>
                  This is an animal shelter app that helps organize cat data.
                  This app uses React, Redux, and a custom built API made with
                  Rails and Postgres
                </p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
