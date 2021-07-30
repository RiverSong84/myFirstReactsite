import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { spaData } from "../data/spaData";

const SpaCom = () => {
  return (
    <Container fluid>
      {spaData.map((spa, index) => {
        return (
          <Row className="d-flex flex-row mb-3 ">
            <Card className=" text-white p-0 ">
              <Card.Img
                style={{ width: "100%" }}
                src={spa.image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>{spa.title}</Card.Title>
                <Card.Text>{spa.text}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default SpaCom;
