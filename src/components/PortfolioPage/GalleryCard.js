import React from 'react'
import { styled } from "@material-ui/core";
// import { colors, letterSpacing, fontWeight } from "../utils/vars";
import albumPhoto from '../../images/album.jpg'
const Card = styled('div')({
    "& img": {
        width: '100%',
    }
})
function GalleryCard({ album, photos }) {
    const { title, id } = album;

    return (
        <Card>
            {/* <div> */}
            {/* <p>{title}</p> */}
                <img src={albumPhoto}/>
            {/* </div> */}
        </Card>
    )
}

export default GalleryCard
