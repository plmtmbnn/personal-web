import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";

export default function Profile() {
  return (
    <Container>
      <NavBar />
      <Container>
        <Row md="1" style={{ height: "80vh" }}>
          <Col md="12" className="text-center align-self-center">
            I am still writing for this...
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
