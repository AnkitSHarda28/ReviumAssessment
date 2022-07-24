import React, { useState } from "react";
import { Images } from "./Images";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Carousel.css";

//This component is used for handling the images slider
const Carousel = ({ slides }) => {
  //this state is required for saving the current image
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //handle the next image
  const nextSlide = () => {
    //If it is last image, it will go back to first image. If not, go to the next image
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  //handle the previous image
  const prevSlide = () => {
    //If first image, it will go back to last image. If not, go to the previous image
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  //Handles the click on indicators
  const toggleImage = (index) => {
    //sets the current image to the incator index value
    setCurrent(index);
  };

  return (
    <section className="slider">
      <div className="sliderWrapper">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {Images.map((slide, index) => {
          return (
            <div
              className={index == current ? "image active" : "image"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          );
        })}
      </div>
      <div className="indicators">
        {Images.map((slide, index) => {
          return (
            <div
              className={index == current ? "dotsChecked" : "dots"}
              onClick={() => {
                toggleImage(index);
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
