import React from "react";
import Footer from "@components/Footer";

import { Container, Row, Col } from "reactstrap";

import NavBar from "../components/NavBar";
import Link from "next/link";

import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
export default function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <div
          style={{ height: "80vh" }}
          className="text-center d-flex justify-content-center"
        >
          <Row className="align-self-center">
            <Col xs="12">
              <h1>{"It's Polma Tambunan."}</h1>
            </Col>
            <Col xs="4">
              <Link
                color="light"
                href="https://www.linkedin.com/in/polma-tambunan/"
              >
                <FiLinkedin />
              </Link>
            </Col>
            <Col xs="4">
              <Link
                color="light"
                href="https://www.instagram.com/polmatambunan/"
              >
                <FiInstagram />
              </Link>
            </Col>
            <Col xs="4">
              <Link color="light" href="mailto:plmtmbnn@gmail.com">
                <FiMail />
              </Link>
            </Col>
          </Row>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
