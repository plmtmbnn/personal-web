import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";

export default function Custom404() {
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
      <hr />
      <Link href="/">Go back home</Link>
    </Container>
  );
}
