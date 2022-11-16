import React from "react";
import { Col, Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";

export default function Profile() {
  return (
    <Container>
      <NavBar />
      <Container>
        <Row md="1">
          <Col md="12" className="text-center">
            still writing...
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
