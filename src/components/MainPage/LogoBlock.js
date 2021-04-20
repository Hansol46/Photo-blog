import React from 'react'
import { styled } from '@material-ui/core'

const Logo = styled('div')({
    margin: '70px 0px',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
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
