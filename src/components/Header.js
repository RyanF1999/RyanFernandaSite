import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import NavigationLink from './NavigationLink';

const useStyle = makeStyles({
    root: {
        backgroundColor: 'transparent'
    },
    title: {
        backgroundColor: '#69C4E4',
        paddingTop: 10,
        paddingBottom: 10,
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.5)',
        zIndex: 5
    },
    nav: {
        backgroundColor: '#69C4E4',
        paddingTop: 20,
        paddingBottom: 5,
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.3)',
        zIndex: 3
    }
})

function Header(){
    const style = useStyle();

    return(
        <header>
            <Grid 
                container
                justify="center"
                spacing={2}
                className={style.title}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                        Ryan Fernanda
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        IT Developer
                    </Typography>
                </Grid>
            </Grid>
            <Grid 
                container
                justify="center"
                spacing={2}
                className={style.nav}
            >
                <NavigationLink linkTo="/" content="Portfolio" page='PORTFOLIO'/>
                <NavigationLink linkTo="/cv" content="CV" page='CV'/>
            </Grid>
        </header>
    );
}

export default Header;