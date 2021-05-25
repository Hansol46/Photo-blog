import React, { Component } from "react";
import Slider from "react-slick";
import { styled } from "@material-ui/core";
import img1 from "../images/photoblock_img1.jpg";

const SliderStyled = styled(Slider)({
  position: "relative",
  "& .imgFullScreen": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@media(max-width:750px)": {
    "& .closeImg": {
      right: "20px",
      top: "50px",
    },
  },
  marginTop: 80,
  "& button": {
    marginTop: 50,
    width: "200px",
  },
  "& button:before": {
    fontSize: 50,
  },
});

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <SliderStyled {...settings}>
          <div>
            <img src={img1} alt="alt" title="title" />
          </div>
          <div>
            <img src={img1} alt="alt" title="title" />
          </div>
          <div>
            <img src={img1} alt="alt" title="title" />
          </div>
          <div>
            <img src={img1} alt="alt" title="title" />
          </div>
        </SliderStyled>
      </div>
    );
  }
}
