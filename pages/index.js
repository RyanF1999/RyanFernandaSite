import React, {useEffect} from 'react';
import Head from 'next/head';

import Grid from '@material-ui/core/Grid';

import PortfolioList from '../components/PortfolioList';

import Axios from '../utils/Axios';
import {initGA, logPageView} from '../utils/GoogleTag';

function Portfolio(props){
    const {portfolio = []} = props;

    useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return (
        <Grid container spacing={4} justify="center">
            <Head>
                <title>Ryan Fernanda | Portfolio</title>
                <meta name="description" content="Ryan Fernanda's portfolio"/>
                <meta name="keywords" content="Ryan Fernanda, RyanF42, StarfallProduction, Starfall Production, React, Angular, Electron, React Native, Web Development, Web developer, Mobile Development, Mobile developer, ElectronJS Developer, starfallproduction42, Freelancer"/>
            </Head>

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

Portfolio.getInitialProps = async (ctx) => {
    // prefetch portfolio
    let portfolio = [];

    try{
        const data = await Axios.get('Portfolio', {
            params: {
                orderBy: "title:asc"
            }
        });

        portfolio = data.data.map(value => value.data);
    }catch(err){
        console.log(err);
    }

    return {
        portfolio: portfolio
    };
};

export default Portfolio;