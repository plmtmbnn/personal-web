import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import { Fade } from "react-awesome-reveal";

export default function Profile() {
  return (
    <Container>
      <NavBar />
      <Container>
        <Row className="vh-100 align-items-center">
          <Col md="12" className="text-center align-self-center">
            <Fade delay={1e3} cascade damping={1e-1}>
            I am still writing for this...
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
