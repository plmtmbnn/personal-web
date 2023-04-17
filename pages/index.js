import React from "react";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../components/NavBar";

import Link from "next/link";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import Image from "next/image";

import avatar from "../styles/images/ava.jpg";
import moment from "moment/moment";

import { Fade, Slide, JackInTheBox, Zoom } from "react-awesome-reveal";

export default function index() {
  return (
    <Container>
      <NavBar />
      <Container>
        <Row className="vh-100 align-items-center">
          <Col md="7" xs="12" className="d-flex justify-content-center">
            <Row>
              <Col xs="12" className="align-self-end">
                <Slide>
                  <h1 className="text-left">Hi, I am Polma Tambunan.</h1>
                </Slide>
                <JackInTheBox>
                  <div>
                    <h5
                      style={{
                        color: "#0575e6"
                      }}
                    >
                      Software Developer
                    </h5>
                  </div>
                </JackInTheBox>
              </Col>
              <Col xs="12" className="align-self-start">
                <Row>
                  <Col xs="12">
                    <Fade delay={1e3} cascade>
                      <p className="text-left text-muted">
                        I'm working remotely from Toba. Currently fluent in
                        developing awesome full-stack projects with Javascript /
                        Typescript (NodeJs & ReactJs) with
                        <b>
                          {" "}
                          {moment().diff(
                            moment("2018-01-01", "YYYY-MM-DD"),
                            "y"
                          )}
                          {" years "}
                        </b>{" "}
                        of experiences.
                      </p>
                    </Fade>
                  </Col>
                  <Col xs="3" className="align-self-start">
                    <Row>
                      <Col xs="4">
                        <Zoom delay={500} cascade>
                          <Link
                            color="light"
                            href="https://www.linkedin.com/in/polma-tambunan/"
                          >
                            <FiLinkedin />
                          </Link>
                        </Zoom>
                      </Col>
                      <Col xs="4">
                        <Zoom delay={1000} cascade>
                          <Link
                            color="light"
                            href="https://www.instagram.com/polmatambunan/"
                          >
                            <FiInstagram />
                          </Link>
                        </Zoom>
                      </Col>
                      <Col xs="4">
                        <Zoom delay={1500} cascade>
                          <Link color="light" href="mailto:plmtmbnn@gmail.com">
                            <FiMail />
                          </Link>
                        </Zoom>
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
      </Container>
    </Container>
  );
}
