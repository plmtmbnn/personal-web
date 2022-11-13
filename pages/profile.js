import React from "react";
import { Container } from "reactstrap";

import NavBar from "../components/NavBar";

export default function Profile() {
  return (
    <Container>
      <NavBar />
      <div className="text-center">No Profile Yet</div>
    </Container>
  );
}
