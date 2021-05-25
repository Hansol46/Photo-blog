import React from "react";
import { styled } from "@material-ui/core";

import mainPhoto from "../../images/main-photo.jpg";
const Photo = styled("div")({
  
  "& img": {
    width: "60%",
    borderRadius: '30px'
    // borderRadius: '50%'
  },
  marginBottom: "50px",
  textAlign: 'center',
  "@media(max-width: 520px)":{
    "& img": {
      width: "100%",
      // borderRadius: '50%'
    },
  }
 
});

function PhotoBlock() {
  return (
    <Photo>
      <img
        src={mainPhoto}
        alt="main"
        title="main"
      />
      
    </Photo>
  );
}

export default PhotoBlock;
