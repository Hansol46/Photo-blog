import React from 'react'
import { styled } from "@material-ui/core";
// import { colors, letterSpacing, fontWeight } from "../utils/vars";
import GalleryCard from './GalleryCard';
// import {  } from 'react-router';
import { Link, Route } from 'react-router-dom'
const Gallery = styled('section')({
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 2fr ',
    gap: '20px',
    // border: '2px solid pink',
    "& a:hover": {
      opacity: '0.3',
      transition: 'opacity 0.5s ease 0s',
      cursor:'pointer'
    },
    ['@media (max-width:700px)']: {
      gridTemplateColumns: '2fr 2fr',
    },
    ['@media (max-width:520px)']: {
      gridTemplateColumns: '2fr',
    }
})
function GalleryBlock({albums, photos}) {
    // const {albums, photos} = props
    // console.log('albums!',albums)
    return (
        <Gallery>
            {albums.map((album) => (
              
        <Route
          exact
          path={'/portfolio'}
          key={album.id}
          render={() => (
            <Link to={`/portfolio/albums/${album.id}`}> 
            {/* to={`/portfolio/${album.id}/photos`} */}
              <GalleryCard key={album.id} album={album} photos={photos} />
            </Link>
          )}
        />
      ))}
        </Gallery>
    )
}

export default GalleryBlock
