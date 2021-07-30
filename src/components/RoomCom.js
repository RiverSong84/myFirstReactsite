import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { roomData } from "../data/roomData";

const RoomCom = () => {
  return (
    <Container fluid>
      {roomData.map((room, index) => {
        return (
          <Row className="d-flex flex-row mb-3 ">
            <Card className=" text-white p-0 ">
              <Card.Img
                style={{ width: "100%" }}
                src={room.image}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.subTitle}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default RoomCom;
