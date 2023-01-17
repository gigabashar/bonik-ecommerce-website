import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Slider from "react-slick";

const FlashCard = ({ productItems }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <AiOutlineArrowRight />
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <AiOutlineArrowLeft />
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((items) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{items.discount}% Off</span>
                  <img src={items.cover} alt="" />
                  <div className="product-like">
                    <label htmlFor="">0</label> <br />
                    <FiHeart />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{items.name}</h3>
                  <div className="rate">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                  <div className="price">
                    <h4>{items.price}$</h4>
                    <button>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
