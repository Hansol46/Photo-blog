import React from 'react'
import { Link, styled } from '@material-ui/core'
import {colors, letterSpacing, fontWeight} from '../utils/vars'
const Logo = styled('div')({
    margin: '70px 0px',
    display: 'flex',
    justifyContent: 'center',
    // border: '1px solid red',
    '& a': {
        fontFamily: "AngeleciaProReg",
        color: `${colors.mainColor}`,
        fontWeight: `${fontWeight.mainWeight}`,
        letterSpacing: `${letterSpacing.mainLetterSpacing}`,
        textTransform: 'uppercase',
    },
    '& a:hover':{
        textDecoration: 'none',
        cursor:'pointer'
    }
})
function LogoBlock({title}) {
    return (
        <Logo>
            <h1><Link to='/'> {title} </Link> </h1>
        </Logo>
    )
}

export default LogoBlock
