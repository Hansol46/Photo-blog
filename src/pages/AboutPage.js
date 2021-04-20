import { styled } from '@material-ui/core'
import React from 'react'

const AboutSection = styled('section')({
    width: '100%',
    border: '1px solid red'
})
function AboutPage() {
    return (
        <AboutSection>
            ABOUT PAGE
        </AboutSection>
    )
}

export default AboutPage
