import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import NavBar from "../components/NavBar";

export default function Custom404() {
  return (
    <Container>
      <NavBar />

      <Row style={{ height: "75vh" }} className="align-items-center">
        <Col sm="12" className="d-flex align-self-end justify-content-center">
          <h1>404</h1>
        </Col>
        <Col sm="12" className="d-flex align-self-start justify-content-center">
          <h2 class="font-weight-normal lead" id="desc">
            The page you requested was not found.
          </h2>
        </Col>
        <Col sm="12" className="d-flex align-self-start justify-content-center">
          <Link href="/" className="justify-self-center">
            Go back home
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
