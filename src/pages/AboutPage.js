import { styled } from '@material-ui/core'
import React from 'react'
import InfoBlock from '../components/AboutPage/InfoBlock'
import LogoBlock from '../components/LogoBlock'

const AboutSection = styled('section')({
    width: '100%',
})
function AboutPage() {
    return (
        <AboutSection>
            <LogoBlock title={'Об авторе'} />
            <InfoBlock />
        </AboutSection>
    )
}

export default AboutPage
