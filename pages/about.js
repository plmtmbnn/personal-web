import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Container>
      <NavBar />
      <Row style={{ height: "75vh", margin: "10px 5px" }}>
        <Col sm="12" className="text-left">
          <Fade delay={500} cascade damping={1e-1}>
            <h5>Introduction & Background</h5>
            <p className="text-left text-muted">
              A financial technology professional. Currently, I work remotely
              from Toba. With a strong background in the industry, I am
              dedicated to utilizing technology to foster innovation. I also
              take pleasure in mentoring emerging professionals. In addition to
              my professional pursuits, I am committed to maintaining a healthy
              lifestyle by running 20 kilometers every week.
            </p>
          </Fade>
        </Col>
        <Col sm="12" className="text-left">
          <Fade delay={1000} cascade damping={1e-1}>
            <h5>Skills</h5>
            <p className="text-left text-muted">
              My technical skills include proficiency in Javascript / Typescript
              (NodeJs & ReactJs), and SQL, as well as experience with cloud
              computing and data analysis.
            </p>
          </Fade>
        </Col>
        <Col sm="12" className="text-left">
          <Fade delay={1500} cascade damping={1e-1}>
            <h5>Approach</h5>
            <p className="text-left text-muted">
              I believe in writing clean, maintainable code and working
              collaboratively with my team to ensure the best possible outcome
              for each project.
            </p>
          </Fade>
        </Col>
        <Col sm="12" className="text-left">
          <Fade delay={2000} cascade damping={1e-1}>
            <h5>Interests</h5>
            <p className="text-left text-muted">
              In my free time, I enjoy running, capture photos of nature and
              watching Youtube.
            </p>
          </Fade>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
