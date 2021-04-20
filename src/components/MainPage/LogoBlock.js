import React from 'react'
import { styled } from '@material-ui/core'
import {colors, letterSpacing, fontWeight} from '../../utils/vars'
const Logo = styled('div')({
    margin: '70px 0px',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
        fontFamily: "AngeleciaProReg",
        color: `${colors.mainColor}`,
        fontWeight: `${fontWeight.mainWeight}`,
        letterSpacing: `${letterSpacing.mainLetterSpacing}`,
        textTransform: 'uppercase',
    }
})
function LogoBlock() {
    return (
        <Logo>
            <h1>vita dorofeeva</h1>
        </Logo>
    )
}

export default LogoBlock
