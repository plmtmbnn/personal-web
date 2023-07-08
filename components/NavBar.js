import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { TiThMenuOutline } from "react-icons/ti";

export default function NavBar({ args }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    // Check on initial render
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavBarShow = pathname => {
    const activeMenuStyling = targetPath => {
      if (pathname === targetPath) {
        return { backgroundColor: "#213363", color: "white" };
      } else {
        return {};
      }
    };

    return (
      <Nav
        navbar
        className="ml-auto d-flex justify-content-center "
        style={{ width: "max-width", fontSize: "18px", fontWeight: "bold" }}
      >
        <NavItem className="align-self-center">
          <Link
            className="nav-link"
            href="/about"
            style={{ ...activeMenuStyling("/about") }}
          >
            About
          </Link>
        </NavItem>
        <NavItem className="align-self-center">
          <Link
            className="nav-link"
            href="/my-work"
            style={{ ...activeMenuStyling("/my-work") }}
          >
            My Work
          </Link>
        </NavItem>
        <NavItem className="align-self-center">
          <Link
            className="nav-link"
            href="/blog"
            style={{ ...activeMenuStyling("/blog") }}
          >
            Blog
          </Link>
        </NavItem>
      </Nav>
    );
  };

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
      <Navbar
        {...args}
        expand="md"
        className="navbar navbar-expand-lg navbar-light navbar-inverse navbar-fixed-top"
      >
        <Link className="navbar-brand" href="/">
          <div className="navbar-title">plmtmbnn.</div>
        </Link>
        {isMobileView ? (
          <>
            <NavbarToggler
              onClick={toggle}
              style={{
                border: "0px solid #213363",
                borderRadius: "50px",
                padding: "10px"
              }}
            >
              <TiThMenuOutline style={{ color: "#213363" }} />
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              {NavBarShow(router.pathname)}
            </Collapse>
          </>
        ) : (
          NavBarShow(router.pathname)
        )}
      </Navbar>
    </div>
  );
}
