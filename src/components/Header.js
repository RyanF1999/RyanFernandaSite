import React, {useEffect, useRef, useState} from 'react';
import {Grid, Typography, Box, makeStyles} from '@material-ui/core';
import NavigationLink from './NavigationLink';

const useStyle = makeStyles({
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#69C4E4',
    },
    nav: {
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.3)',
        zIndex: 10
    },
    navsticky: {
        backgroundColor: '#69C4E4',
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.3)',
        zIndex: 10,
        position: 'fixed',
        top: 0
    }
})

function Header(){
    const style = useStyle();
    const [isSticky, SetSticky] = useState(true);
    const triggerRef = useRef();

    // will make navigation into fixed after stuck in top
    const navsticky = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                SetSticky(false);
            }else{
                SetSticky(true);
            }
        })
    }, {threshold: 0});

    useEffect(()=>{
        navsticky.observe(triggerRef.current);
        return ()=>navsticky.disconnect()
    }, []);

    return(
        <Grid component="header" container className={style.root} justify="center">
            <Box component={Grid} item xs={12} pt={1} pb={0.25}>
                <Typography variant="h4" align="center">
                    Ryan Fernanda
                </Typography>
            </Box>
            <Grid item xs={12} ref={triggerRef}>
                <Typography variant="h5" align="center">
                    IT Developer
                </Typography>
            </Grid>
            <Box
                py={1}
                component={Grid}
                item
                container
                justify="center"
                className={isSticky ? style.navsticky : style.nav}
            >
                <NavigationLink to="/" content="Portfolio" page='PORTFOLIO'/>
                <NavigationLink to="/cv" content="CV" page='CV'/>
            </Box>
        </Grid>
    );
}

export default Header;