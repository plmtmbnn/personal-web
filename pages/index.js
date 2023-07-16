import React from "react";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../components/NavBar";

import Link from "next/link";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import { Fade, Slide, Bounce } from "react-awesome-reveal";
import myAvatar from "../public/images/avatar-new.png";
import Image from "next/image";
Image;
export default function index() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900; // Adjust the breakpoint as per your mobile device criteria
  return (
    <Container>
      <NavBar />
      <Row style={{ height: "75vh" }} className="align-items-center">
        <Col md="7" xs="12" className="d-flex justify-content-center">
          <Row>
            <Col xs="12" className="align-self-end">
              <Slide>
                <h1 className="text-left" style={{ color: "#213363" }}>
                  Polma Tambunan
                </h1>
              </Slide>
              <div>
                <h5
                  style={{
                    color: "#EA5455"
                  }}
                >
                  <Fade
                    delay={0}
                    cascade
                    damping={1e-1}
                    style={{ backgroundColor: "#E4DCCF" }}
                  >
                    Tech Enthusiast
                  </Fade>
                  <Fade delay={2000} cascade damping={1e-1}>
                    {" | "}
                  </Fade>
                  <Fade
                    delay={500}
                    cascade
                    damping={1e-1}
                    style={{ backgroundColor: "#F6E1C3" }}
                  >
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
                      20KM+ a week.
                    </p>
                  </Fade>
                </Col>
                <Col xs="3" className="align-self-start">
                  <Row>
                    <Col xs="4">
                      <Bounce delay={500} cascade>
                        <Link
                          style={{
                            color: "#BE3737"
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
                            color: "#BE3737"
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
                            color: "#BE3737"
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
      </Row>
      <div>
        <Fade delay={500}>
          {isMobile ? (
            <div></div>
          ) : (
            <Image
              src={myAvatar}
              alt="PLMTMBNN"
              className={"background-image"}
            ></Image>
          )}
        </Fade>
      </div>
    </Container>
  );
}
