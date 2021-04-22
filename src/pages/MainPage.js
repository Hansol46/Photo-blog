import { styled } from '@material-ui/core'
import React from 'react'
import InfoBlock from '../components/MainPage/InfoBlock'
import LogoBlock from '../components/MainPage/LogoBlock'

const MainSection = styled('section')({
    width: '100%',
border: '1px solid pink'
})

function MainPage() {
    return (
        <MainSection>
            <LogoBlock />
            <InfoBlock />
        </MainSection>
    )
}

export default MainPage
