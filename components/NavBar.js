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
        <title>Polma Tambunan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="polma tambunan - software engineer" />
        <meta
          property="og:title"
          content="polma tambunan - software engineer"
        />
        <meta
          property="og:description"
          content="I'm working remotely from Toba. Currently fluent in doing some awesome full-stack projects with Javascript / Typescript (Node Js & React Js) but still exploring some technologies. I'm founder of cooderu too."
        />
        <meta property="og:url" content="https://polmatambunan.my.id/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.pngitem.com/pimgs/m/106-1063279_earth-drawing-cartoon-free-hd-image-clipart-earth.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://polmatambunan.my.id/" />
        <meta
          property="twitter:title"
          content="polma tambunan - software engineer"
        />
        <meta
          property="twitter:description"
          content="I'm working remotely from Toba. Currently fluent in doing some awesome full-stack projects with Javascript / Typescript (Node Js & React Js) but still exploring some technologies. I'm founder of cooderu too."
        />
        <meta
          property="twitter:image"
          content="https://www.pngitem.com/pimgs/m/106-1063279_earth-drawing-cartoon-free-hd-image-clipart-earth.png"
        />
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
