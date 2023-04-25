import React from "react";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Link from "next/link";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import Image from "next/image";

import avatar from "../styles/images/ava.jpg";
import moment from "moment/moment";

import { Fade, Slide, Bounce } from "react-awesome-reveal";

export default function index() {
  return (
    <Container>
      <NavBar />
      <Row style={{ height: "75vh" }} className="align-items-center">
        <Col md="7" xs="12" className="d-flex justify-content-center">
          <Row>
            <Col xs="12" className="align-self-end">
              <Slide>
                <h1 className="text-left">Hi, I am Polma Tambunan.</h1>
              </Slide>
              <div>
                <h5
                  style={{
                    color: "#0575e6"
                  }}
                >
                  <Fade delay={0} cascade damping={1e-1}>
                    Tech Enthusiast
                  </Fade>
                  <Fade delay={2000} cascade damping={1e-1}>
                    {" | "}
                  </Fade>
                  <Fade delay={500} cascade damping={1e-1}>
                    Amateur Runner
                  </Fade>
                </h5>
              </div>
            </Col>
            <Col xs="12" className="align-self-start">
              <Row>
                <Col xs="12">
                  <Fade delay={1e3} cascade damping={1e-1}>
                    <p className="text-left text-muted">
                      {"I'm "}working remotely from Toba. Currently fluent in
                      developing awesome full-stack projects with Javascript /
                      Typescript (NodeJs & ReactJs) with{" "}
                      {moment().diff(moment("2018-01-01", "YYYY-MM-DD"), "y")}
                      {" years "}
                      of experiences in Financial Technology.
                    </p>
                  </Fade>
                </Col>
                <Col xs="3" className="align-self-start">
                  <Row>
                    <Col xs="4">
                      <Bounce delay={500} cascade>
                        <Link
                          color="light"
                          href="https://www.linkedin.com/in/polma-tambunan/"
                        >
                          <FiLinkedin />
                        </Link>
                      </Bounce>
                    </Col>
                    <Col xs="4">
                      <Bounce delay={1000} cascade>
                        <Link
                          color="light"
                          href="https://www.instagram.com/polmatambunan/"
                        >
                          <FiInstagram />
                        </Link>
                      </Bounce>
                    </Col>
                    <Col xs="4">
                      <Bounce delay={1500} cascade>
                        <Link color="light" href="mailto:plmtmbnn@gmail.com">
                          <FiMail />
                        </Link>
                      </Bounce>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="5" xs="12" className="d-flex justify-content-center">
          <Row>
            <Fade delay={1e3} cascade>
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
            </Fade>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
