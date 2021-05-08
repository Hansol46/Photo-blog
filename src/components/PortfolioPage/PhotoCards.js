import React from "react";
import { Route } from "react-router-dom";
import Photo from "./Photo";
import { styled } from "@material-ui/core";

import { photosArray } from "../../utils/data";

const PhotoBlock = styled("div")({
  display: "grid",
  gridTemplateColumns: "2fr 2fr 2fr ",
  gap: "20px",
  textAlign: "center",
  "&:first-child": {
    gridTemplateColumns: "2fr",
  },
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "2fr 2fr 2fr ",
  },
  "@media (max-width: 985px)": {
    gridTemplateColumns: "2fr 2fr",
  },
  "@media (max-width: 700px)": {
    gridTemplateColumns: "2fr",
  },
  "@media (max-width: 350px)": {
    gridTemplateColumns: "2fr",
    "& img": {
      width: "100%",
    },
  },
});

function PhotoCards({ photos }) {
  console.log("photos", photos);
  return (
    <PhotoBlock>


      {photosArray.map((photo) => (
        <Route
        path={`/portfolio/albums/${photo.albumId}`}
        key={photo.id}
        render={() => <Photo key={photo.id} photo={photo} />}
      />
      ))}


      {/* {photos.map((photo) => (
        <Route
          path={`/portfolio/albums/${photo.albumId}`}
          key={photo.id}
          render={() => <Photo key={photo.id} photo={photo} />}
        />
      ))} */}
    </PhotoBlock>
  );
}

export default PhotoCards;
