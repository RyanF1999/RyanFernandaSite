import React, {lazy} from 'react';
import PortfolioList from './components/PortfolioList';
import {Grid} from '@material-ui/core';

const PortfolioPreview = lazy(() => import('./components/PortfolioPreview'));

function Portfolio(){
    return (
        <React.Fragment>
            <PortfolioPreview />
            <Grid container spacing={5}>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
                <PortfolioList/>
            </Grid>
        </React.Fragment>
    );
}

export default Portfolio;