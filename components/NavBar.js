import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Head from "next/head";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <Navbar {...args} expand="md">
        <NavbarBrand href="/">Polma Tambunan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/profile/">Profile</NavLink>
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
