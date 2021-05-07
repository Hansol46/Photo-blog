import React from "react";
import { styled } from "@material-ui/core";

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
    color: "white",
    fontSize: 30,
  },
});
function GalleryCard({ album, photos }) {
  const { title, id } = album;

  return (
    <Card>
      <img src={albumPhoto} alt={`number${id}`} title={title} />
      <div>Название 1</div>
    </Card>
  );
}

export default GalleryCard;
