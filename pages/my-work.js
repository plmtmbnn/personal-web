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
      <Row style={{ height: "75vh" }}>
        <Col md="12" className="text-left">
          <Fade>Here are some examples of my recent work.</Fade>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
