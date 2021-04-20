import { styled } from '@material-ui/core'
import React from 'react'
import LogoBlock from '../components/MainPage/LogoBlock'

const MainSection = styled('section')({
    width: '100%',
// border: '1px solid pink'
})

function MainPage() {
    return (
        <MainSection>
            <LogoBlock />
        </MainSection>
    )
}

export default MainPage
