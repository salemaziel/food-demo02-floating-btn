import React from "react";

import Card from "react-bootstrap/Card";

import "./FeaturedFoodCards.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const FeaturedFoodCards2 = ({ data }) => {
  return (
    <div className="py-2 my-5">
      <Slider {...settings}>
        {data.map((card) => (
          <div>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className="d-flex flex-column text-center align-items-center px-4 py-2 ">
                <h3 className="font-weight-bold mb-0 mt-4">
                  {card.title}
                </h3>
                <small>{card.price}</small>
                <Card.Text className="mt-4">
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default FeaturedFoodCards2;
