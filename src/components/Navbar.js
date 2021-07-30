import React from "react";

import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#77574C" }} expand="lg">
      <LinkContainer to="/" style={{ color: "#fff" }}>
        <Navbar.Brand>Logo</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ borderColor: "rgb(255,255,255)" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/room" style={{ color: "#fff" }}>
            <Nav.Link>Sobe</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/restoran" style={{ color: "#fff" }}>
            <Nav.Link>Restoran</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/spa" style={{ color: "#fff" }}>
            <Nav.Link>Spa</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/teretana" style={{ color: "#fff" }}>
            <Nav.Link>Teretana</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
