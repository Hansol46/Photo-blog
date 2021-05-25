import React from "react";
import { styled } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "react-slick";
import { photosArray } from "../../utils/data";
const SliderStyled = styled(Slider)({
  position: "relative",

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

  "& .slider": {
    position:'relative',
    zIndex: 2,
    height: "80vh",
  },
  '& .slick-prev' : {
    zIndex: 5
  },
  "& .slider img ": {
    position:'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // height: "80vh",
  },
});

const PhotoImg = styled("div")({
  
  "& .cardPhoto2": {
    display: "none",
  },
  "& .imgFull:not(:target)": {
    display: "none",
  },
  "& .imgFull:target": {
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(0,0,0,0.8)",
  },
 
  "& .imgFullScreen": {
    // position: "absolute",
    // position: 'relative',
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // height: '90vh'
  },
  "& .closeImg": {
    position: "absolute",
    top: "20px",
    right: "220px",
    fontSize: "50px",
    color: "red",
  },
  "& .closeImg:hover": {
    opacity: "0.4",
  },
  "& a:hover": {
    opacity: "0.6",
    transition: "opacity 0.5s ease 0s",
  },
  "@media(max-width:1160px)": {
    "& .closeImg": {
      right: "20px",
    },
  },

  "@media(max-width:750px)": {
    
    "& .closeImg": {
      right: "20px",
      top: "50px",
    },
  },
  "@media(max-width:430px)": {
    "& .closeImg": {
      right: "45%",
    },
  },
  "@media(max-width:550px)": {
    "& .cardPhoto2": {
      display: "block",
    },
    "& .cardPhoto": {
      display: "none",
    },
  },
});
const ImgPhoto = styled("img")({
  width: 300,
  "@media (max-width: 700px)": {
    width: "70%",
  },
  "@media (max-width: 530px)": {
    width: "100%",
  },
});
const ImgFullScren = styled("img")({
  width: 400,
  // height: '80vh'
});
function Photo({ photo, albumId }) {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: photo.id - 1,
  };

  return (
    <PhotoImg>
      <div className="cardPhoto">
        <a href={`#imgFull${photo.id}`}>
          <ImgPhoto
            src={photo.url}
            alt="Фото"
            title=" Нажмите чтобы увеличить"
          />
        </a>
      </div>

      <div className="cardPhoto2">
        <ImgPhoto src={photo.url} alt="Фото" title=" Нажмите чтобы увеличить" />
      </div>

      <div id={`imgFull${photo.id}`} className="imgFull">
        {/* SLIDER */}
        <SliderStyled {...settings}>
          {photosArray.map((photo, id) => {
            return (
              <div key={id} className="slider">
                <ImgFullScren
                  className="imgFullScreen"
                  src={photo.url}
                  alt="Фотография"
                  title=" Нажмите на Х чтобы закрыть "
                />
              </div>
            );
          })}
        </SliderStyled>

        {/* CLOSE BUTTON */}
        <a href="#" className="closeImg">
          <CloseIcon style={{ fontSize: 40 }} />
        </a>

      </div>
    </PhotoImg>
  );
}

export default Photo;
