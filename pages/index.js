import React from "react";
import Footer from "@components/Footer";

import { Container, Row } from "reactstrap";

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <div
          style={{ height: "80vh" }}
          className="text-center d-flex justify-content-center"
        >
          <Row>
            <h1 className="align-self-end">{"It's Polma Tambunan."}</h1>
            <a href="https://www.instagram.com/polmatambunan/">
              https://www.instagram.com/polmatambunan/
            </a>
          </Row>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
