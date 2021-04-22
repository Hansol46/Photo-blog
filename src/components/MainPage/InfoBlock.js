import React from 'react'
import ImgHello from '../../images/hello.png'
import { styled } from '@material-ui/core'
import {colors, letterSpacing, fontWeight} from '../../utils/vars'

const MainBlock = styled('article')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid blue',
    width: '100%',
    
})
const ArticleBlock = styled('div')({
    border: '1px solid red',
    width: '820px',
    ["@media(max-width: 985px)"] : {
        width:'auto'
    },
    '& img': {
        maxWidth: '100%',
        border: '1px solid green'
    }
})

function InfoBlock() {
    return (
        <MainBlock>
            <ArticleBlock>
                
            <img src={ImgHello} alt='helllo' />
                <h2>
                Меня зовут Вита, я фотографирую, занимаюсь визуалом, упаковкой брендов и личных блогов в Instagram
                </h2>
                <p>Большинство моих работ - фотографии обычных людей, а не моделей. </p>
                <p>Со мной - легко, именно поэтому Вам не стоит волноваться о позах, одежде и локации. 
                    Об этом позабочусь я!  Вы можете расслабиться и просто получать удовольствие от процесса.
                </p>
                <a href='#'> 1 </a>
                <a href='#'> 2 </a>
                <a href='#'> 3 </a>
                </ArticleBlock>
        </MainBlock>
    )
}

export default InfoBlock
