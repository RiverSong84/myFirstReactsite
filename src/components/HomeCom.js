import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider from "../components/Slider";
import { homeData } from "../data/homeData";
import { sliderData } from "../data/sliderData";

function HomeCom() {
  return (
    <>
      <Slider slides={sliderData} />
      <Container fluid style={{ color: "#77574C" }}>
        <h1>Dobrodošli</h1>
        {homeData.map((card, index) => {
          return (
            <Row className=" d-inline-flex g-card ">
              <Col className="p-4 border-0 ">
                <Card
                  style={{ width: "100%", padding: "5px", border: "0" }}
                  key={index}
                >
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.subTitle}</Card.Text>
                    <Button variant="primary">{card.button}</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default HomeCom;
