import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Head from "next/head";
import Link from "next/link";

export default function NavBar({ args }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <title>Polma Tambunan - Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="polma tambunan - cooderu.com" />
        <meta property="og:title" content="polma tambunan - cooderu.com" />
        <meta
          property="og:description"
          content="polma tambunan - cooderu.com"
        />
        <meta property="og:url" content="https://cooderu.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar {...args} expand="md">
        <Link className="navbar-brand" href="/">
          Polma.
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" href="/profile/">
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/plmtmbnn/plmtmbnn">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
