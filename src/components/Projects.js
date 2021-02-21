import { Badge, Col, Container, Image, Row } from "react-bootstrap";

import React from "react";
import brio1 from "../images/brio1.png";
import honma from "../images/honma.png";
import projectData from "../projects.json";
import projectDataExp from "../projectsExp.json";
import sudoku from "../images/sudoku.png";
import topPage from "../images/topPage.jpeg";
import typing from "../images/typing.png";

function Projects() {
  const projects = projectData.projects;
  const projectsExp = projectDataExp.projects;
  const images = [topPage, typing, sudoku];
  const imagesExp = [honma, brio1];

  const showDemo = (project) => {
    if (project.links.website) {
      return (
        <Badge pill variant="secondary">
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </Badge>
      );
    }
  };

  return (
    <React.Fragment>
      <Container>
        <h4 className="mt-5">Work Projects</h4>
        <hr></hr>
        {projectsExp.map((project, index) => {
          return (
            <Row className="mb-3 mb-5" key={project.title} id={project.id}>
              <Col xs={12} md={4} className="mt-5 mb-3">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <Image
                    src={imagesExp[index]}
                    style={{ width: 200, height: 200 }}
                    thumbnail
                  />
                  {/* <iframe
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
                  /> */}
                </div>
              </Col>
              <Col xs={12} md={8} className="mt-5 mb-3">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Badge pill variant="secondary">
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Badge>{" "}
                  {showDemo(project)}
                </div>
              </Col>
            </Row>
          );
        })}

        <h4 className="mt-5">Personal Projects</h4>
        <hr></hr>
        {projects.map((project, index) => {
          return (
            <Row className="mb-3" key={project.title}>
              <Col xs={12} md={4} className="mt-5 mb-3">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <Image
                    src={images[index]}
                    style={{ width: 200, height: 200 }}
                    thumbnail
                  />
                  {/* <iframe
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
                  /> */}
                </div>
              </Col>
              <Col xs={12} md={8} className="mt-5 mb-3">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Badge pill variant="secondary">
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                    </a>
                  </Badge>{" "}
                  {showDemo(project)}
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
