import React from "react";
import { Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <React.Fragment>
     <Row>
    <Col xs={6} md={4}>
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
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
            width: "50%",
            height: "50%",
          }}
        />
      </div>
    </Col>
    <Col xs={6} md={4}>
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
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
            width: "50%",
            height: "50%",
          }}
        />
      </div>
    </Col>
    <Col xs={6} md={4}>
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
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
            width: "50%",
            height: "50%",
          }}
        />
      </div>
    </Col>
  </Row>

      

      

      
    </React.Fragment>
  );
}

export default Projects;
