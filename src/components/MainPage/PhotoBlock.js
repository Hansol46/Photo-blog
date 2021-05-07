import React from "react";
import { styled } from "@material-ui/core";

// import meImg from "../../images/me.jpg";
import mainPhoto from "../../images/main-photo.jpg";
const Photo = styled("div")({
 
  "& img": {
    width: "100%",
  },
  marginBottom: "50px",
 
});

function PhotoBlock() {
  return (
    <Photo>
      <img
        // src={meImg}
        src={mainPhoto}
        alt="main"
        title="main"
      />
      
    </Photo>
  );
}

export default PhotoBlock;
