import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import { sliderData } from "../data/sliderData";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {sliderData.map((slide, indexes) => {
        return (
          <Carousel.Item kex={indexes}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.subTitle} </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Slider;
