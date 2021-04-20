import { styled } from '@material-ui/core'
import React from 'react'

const PortfolioSection = styled('section')({
    width: '100%',
border: '1px solid blue'
})
function PortfolioPage() {
    return (
        <PortfolioSection>
            PORTFOLIO PAGE
        </PortfolioSection>
    )
}

export default PortfolioPage
