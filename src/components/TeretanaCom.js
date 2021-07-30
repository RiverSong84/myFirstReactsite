import React from "react";
import { Card, Container, Row } from "react-bootstrap";

import teretana from "../img/teretana.jpg";

const TeretanaCom = () => {
  return (
    <Container fluid>
      <Row className="d-flex flex-row mb-3 ">
        <Card className=" text-white p-0 ">
          <Card.Img style={{ width: "100%" }} src={teretana} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Teretana</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
    </Container>
  );
};

export default TeretanaCom;
