import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { Fade } from "react-awesome-reveal";
import moment from "moment/moment";

export default function MyWork() {
  return (
    <Container>
      <NavBar />
      <Row style={{ height: "80vh", margin: "10px 5px" }}>
        Here are some examples of my recent work.
        <Col md="12" className="text-left">
          <Fade delay={1e3} cascade damping={1e-1}>
            ...
          </Fade>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
