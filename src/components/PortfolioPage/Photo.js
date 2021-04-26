import React from "react";
import { styled } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
const PhotoImg = styled("div")({
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
  '& a:hover': {
    opacity: '0.6',
    transition: 'opacity 0.5s ease 0s',
  },
  ['@media(max-width:1160px)'] : {
    "& .closeImg": {
      right: "20px",
    },
  },
  ['@media(max-width:970px)'] : {
    "& .imgFullScreen": {
      width: 400,
      height: 400
    },
  },
  ['@media(max-width:750px)'] : {
    "& .imgFullScreen": {
      width: 300,
      height: 300
    },
    "& .closeImg": {
      right: "20px",
      top: '50px'
    },
  },
  ['@media(max-width:430px)'] : {
    "& .closeImg": {
      right: '45%',
      
    },
  }

});
/* PHOTO CLOSE  */

function Photo({ photo }) {
  const { url, thumbnailUrl } = photo;
  return (
    <PhotoImg>
      <div className="cardPhoto">
        <a href="#imgFull">
          <img src={thumbnailUrl} alt="Фото" title=" Нажмите чтобы увеличить" />
        </a>
      </div>

      <div id="imgFull" className="imgFull">
        <a href="#" className="closeImg">
          <CloseIcon style={{ fontSize: 40 }} />
        </a>
        <img
          className="imgFullScreen"
          src={url}
          alt="Фотография"
          title=" Нажмите на Х чтобы закрыть "
        />
      </div>
    </PhotoImg>
  );
}

export default Photo;
