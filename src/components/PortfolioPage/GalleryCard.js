import React from "react";
import { styled } from "@material-ui/core";
import { colors, fontWeight, letterSpacing } from "../../utils/vars";

import albumPhoto from "../../images/album.jpg";

const Card = styled("div")({
  position: "relative",
  
  "& img": {
    width: "100%",
    border: "2px solid gray",
  },
  "& div": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 30,
    fontFamily: "AngeleciaProReg",
    color: `${colors.mainColor}`,
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
  },
});
function GalleryCard({ album, photos }) {
 
  // console.log('title:',album.title)
  return (
    <Card>
      <img src={albumPhoto} alt={`number${album.id}`} title={album.title} />
      <div>{album.title}</div>
    </Card>
  );
}

export default GalleryCard;
