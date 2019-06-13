import React, {useEffect, useRef, useState} from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
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
    const GridRoot = React.forwardRef((props, ref)=>{
        return <Grid {...props} innerRef={ref}/>
    });

    const style = useStyle();
    const [init, SetInit] = useState(false);
    const [isSticky, SetSticky] = useState(true);
    const triggerRef = useRef();
    const _isSticky = useRef(isSticky);

    // will make navigation into fixed after stuck in top
    const navsticky = new IntersectionObserver(()=>{
        if(init){
            SetInit(false);
        }else{
            _isSticky.current = !_isSticky.current;
            SetSticky(_isSticky.current);
        }
    }, {threshold: 0});

    useEffect(()=>{
        navsticky.observe(triggerRef.current);
        return ()=>navsticky.disconnect()
    }, []);

    return(
        <Grid component="header" container className={style.root} justify="center">
            <Box component={GridRoot} item xs={12} pt={1} pb={0.25}>
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
                component={GridRoot}
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