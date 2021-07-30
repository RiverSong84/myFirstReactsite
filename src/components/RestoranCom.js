import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { restoranData } from "../data/restoranData";

const RestoranCom = () => {
  return (
    <Container fluid>
      {restoranData.map((rest, index) => {
        return (
          <Row className="d-flex flex-row mb-3 ">
            <Card className=" text-white p-0 ">
              <Card.Img
                style={{ width: "100%" }}
                src={rest.image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>{rest.title}</Card.Title>
                <Card.Text>{rest.subTitle}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default RestoranCom;
