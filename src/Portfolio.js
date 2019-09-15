import React from 'react';
import {useSelector} from 'react-redux';
import PortfolioList from './components/PortfolioList';
import {Grid} from '@material-ui/core';

function Portfolio(){
    const portfolio = useSelector(state => state.database.portfolio);

    return (

        <Grid container spacing={4} justify="center">
            {
                portfolio.map(
                    ({title, img, link, description}) => <PortfolioList 
                        key={title}
                        title={title} 
                        image={img} 
                        desc={description} 
                        link={link}
                    />
                )
            }
        </Grid>
    );
}

export default Portfolio;