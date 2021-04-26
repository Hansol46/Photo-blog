import React from 'react'
import { styled } from "@material-ui/core";

const Photo = styled('div')({
    // border: '2px solid red',
    "& img" : {
        width: '100%',
        // filter: 'grayscale(100%)', 
    },
    marginBottom: '50px'
})

function PhotoBlock() {
    return (
        <Photo>
            <img 
            // src='https://images.wallpaperscraft.ru/image/oblaka_krasivo_nebo_179079_1920x1080.jpg'
            // src='https://images.wallpaperscraft.ru/image/natyurmort_prazdnik_krasivo_90538_1920x1080.jpg'
            src='https://images.wallpaperscraft.ru/image/svadba_ruki_serdtse_lyubov_romantika_116630_1920x1080.jpg'
            />
        </Photo>
    )
}

export default PhotoBlock
