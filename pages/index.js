import React from "react";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Link from "next/link";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import Image from "next/image";

import avatar from "../styles/images/ava.jpg";

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
                <h1 className="text-left">Hi, I am Polma Tambunan</h1>
              </Slide>
              <div>
                <h5
                  style={{
                    color: "#66482f"
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
                      A financial technology professional. Currently, I work
                      remotely from Toba. With a strong background in the
                      industry, I am dedicated to utilizing technology to foster
                      innovation. I also take pleasure in mentoring emerging
                      professionals. In addition to my professional pursuits, I
                      am committed to maintaining a healthy lifestyle by running
                      20 kilometers every week.
                    </p>
                  </Fade>
                </Col>
                <Col xs="3" className="align-self-start">
                  <Row>
                    <Col xs="4">
                      <Bounce delay={500} cascade>
                        <Link
                          style={{
                            color: "#66482f"
                          }}
                          href="https://www.linkedin.com/in/polma-tambunan/"
                          target="_blank"
                        >
                          <FiLinkedin />
                        </Link>
                      </Bounce>
                    </Col>
                    <Col xs="4">
                      <Bounce delay={1000} cascade>
                        <Link
                          style={{
                            color: "#66482f"
                          }}
                          href="https://www.instagram.com/polmatambunan/"
                          target="_blank"
                        >
                          <FiInstagram />
                        </Link>
                      </Bounce>
                    </Col>
                    <Col xs="4">
                      <Bounce delay={1500} cascade>
                        <Link
                          style={{
                            color: "#66482f"
                          }}
                          target="_blank"
                          href="mailto:plmtmbnn@gmail.com"
                        >
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
