import React, {lazy} from 'react';
import PortfolioList from './components/PortfolioList';
import {Grid} from '@material-ui/core';
import ContentContainer from './components/ContentContainer';

const PortfolioPreview = lazy(() => import('./components/PortfolioPreview'));

function Portfolio(){
    return (
        <ContentContainer>
            <PortfolioPreview />
            <Grid container spacing={5}>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
            </Grid>
        </ContentContainer>
    );
}

export default Portfolio;