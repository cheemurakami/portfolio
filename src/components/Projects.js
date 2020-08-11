import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Projects() {
  return (
    <React.Fragment>
      <Container>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4}>
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

          <Col xs={12} md={8} className="mt-3">
            <div>
              <a
                href="https://gurumi-the-florist.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Gurumi the Florist</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4}>
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
          <Col xs={12} md={8} className="mt-3">
            <div>
              <a
                href="https://record-collector-epiapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Record Collector</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={4}>
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
          <Col xs={12} md={8} className="mt-3">
            <div>
              <a
                href="https://urban-tails-shelter.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Urban Tails Shelter</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
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
