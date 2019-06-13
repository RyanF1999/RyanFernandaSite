import React from 'react';
import PortfolioList from './components/PortfolioList';
import {Grid} from '@material-ui/core';

function Portfolio(){
    return (
        <Grid container spacing={4} justify="center">
            <PortfolioList title='title' image='https://via.placeholder.com/350x150.jpg' desc='desc'/>
            <PortfolioList title='title' image='https://via.placeholder.com/350x150.jpg' desc='desc'/>
        </Grid>
    );
}

export default Portfolio;