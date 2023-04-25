import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Fade } from "react-awesome-reveal";
import moment from "moment/moment";

export default function About() {
  return (
    <Container>
      <NavBar />
      <Row style={{ height: "75vh", margin: "10px 5px" }}>
        <Col sm="12" className="text-left">
          <Fade delay={500} cascade damping={1e-1}>
            <h5>Introduction & Background</h5>
            <p className="text-left text-muted">
              {"I'm "}working remotely from Toba. Currently fluent in developing
              awesome full-stack projects with Javascript / Typescript (NodeJs &
              ReactJs) with{" "}
              {moment().diff(moment("2018-01-01", "YYYY-MM-DD"), "y")}
              {" years "}
              of experiences in Financial Technology.
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
