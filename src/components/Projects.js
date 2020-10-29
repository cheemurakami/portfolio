import React from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";
import projectData from "../projects.json";

function Projects() {
  const projects = projectData.projects;
  return (
    <React.Fragment>
      <Container>
        <h4 className="mt-5">My Projects</h4>
        <hr></hr>
        <br></br>
        {projects.map((project) => {
          return (
            <Row className="mt-3 mb-3" key={project.title}>
              <Col xs={12} md={4} className="mt-3 mb-3">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    title={project.title}
                    src={project.links.loom}
                    frameBorder={0}
                    webkitallowfullscreen={project.links.loom}
                    mozallowfullscreen={project.links.loom}
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
                  <h4>{project.title}</h4>
                  <p>
                    {project.description}
                  </p>
                    <Badge pill variant="secondary">
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repo
                      </a>
                    </Badge>{" "}
                    <Badge pill variant="secondary">
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </Badge>{" "}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </React.Fragment>
  );
}

export default Projects;
