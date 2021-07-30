import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{ flex: "0 0 auto", color: "fff4e3", backgroundColor: "#77574C" }}
    >
      <Container>
        <Row className="justify-content-between text-center">
          <Col className="md-4 text-md-left" style={{ color: "#fff" }}>
            <h6>adresa hotela</h6>
            <h6>+387/33 444 555</h6>
            <h6>example@mail.com</h6>
            <div style={{ textAlign: "center" }}>
              <p>Copyright &copy; 2021.</p>
            </div>
          </Col>

          <div className="col-md-4 text-md-right">
            <SocialIcons />
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
