import React from "react";
import { styled } from "@material-ui/core";
import GalleryCard from "./GalleryCard";
import { Link, Route } from "react-router-dom";

import { albumsArray } from "../../utils/data";

const Gallery = styled("section")({
  display: "grid",
  gridTemplateColumns: "2fr 2fr 2fr ",
  gap: "20px",
  "& a:hover": {
    opacity: "0.3",
    transition: "opacity 0.5s ease 0s",
    cursor: "pointer",
  },
  "@media (max-width:700px)": {
    gridTemplateColumns: "2fr 2fr",
  },
  "@media (max-width:520px)": {
    gridTemplateColumns: "2fr",
  },
});
function GalleryBlock({ albums, photos }) {
  console.log("Albums:", albumsArray);
  return (
    <Gallery>

      {albumsArray.map((album) => (
        <Route
          exact
          path={"/portfolio"}
          key={album.id}
          render={() => (
            <Link to={`/portfolio/albums/${album.id}`}>
              <GalleryCard key={album.id} album={album} />
            </Link>
          )}
        />
      ))}

      {/* {albums.map((album) => (
        <Route
          exact
          path={"/portfolio"}
          key={album.id}
          render={() => (
            <Link to={`/portfolio/albums/${album.id}`}>
              <GalleryCard key={album.id} album={album} photos={photos} />
            </Link>
          )}
        />
      ))} */}
    </Gallery>
  );
}

export default GalleryBlock;
