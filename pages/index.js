import React from "react";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../components/NavBar";

import Link from "next/link";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import Image from "next/image";

import avatar from "../styles/images/avatar.png";
import moment from "moment/moment";

export default function index() {
  return (
    <Container>
      <NavBar />
      <Container>
        <Row md="1">
          <Col md="5">
            <Row className="align-items-center" style={{ height: "80vh" }}>
              <Col xs="12" className="align-self-end">
                <h1 className="text-left">Hi, I am Polma Tambunan.</h1>
                <div>
                  <h4
                    style={{
                      color: "#0575e6"
                    }}
                  >
                    Software Developer
                  </h4>
                </div>
              </Col>
              <Col xs="12" className="align-self-start">
                <Row>
                  <Col xs="12">
                    <p className="text-left text-muted">
                      I'm working remotely from Toba. Currently fluent in
                      developing awesome full-stack projects with Javascript /
                      Typescript (Node Js & React Js) with{" "}
                      {moment().diff(moment("2018-01-01", "YYYY-MM-DD"), "y")}{" "}
                      years of experiences.
                    </p>
                  </Col>
                  <Col xs="3" className="align-self-start">
                    <Row>
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
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="7">
            <Row
              style={{ height: "80vh" }}
              className="align-items-center justify-items-center"
            >
              <Col md="12" className="text-center">
                <Image
                  style={{
                    width: "250px",
                    height: "250px",
                    verticalAlign: "middle"
                  }}
                  alt="my-img"
                  src={avatar}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
