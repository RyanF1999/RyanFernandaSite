import React, {useEffect, useRef, useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import NavigationLink from './NavigationLink';

const useStyle = makeStyles({
    root: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    title: {
        backgroundColor: '#69C4E4',
        paddingTop: 10,
        paddingBottom: 10
    },
    nav: {
        backgroundColor: '#69C4E4',
        paddingTop: 20,
        paddingBottom: 5,
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.3)',
        zIndex: 10
    },
    navsticky: {
        backgroundColor: '#69C4E4',
        paddingTop: 20,
        paddingBottom: 5,
        boxShadow: '0px 5px 5px -1px rgba(0,0,0,0.3)',
        zIndex: 3,
        position: 'fixed',
        top: 0
    }
})

function Header(){
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
        <header className={style.root}>
            <Grid 
                ref={triggerRef}
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
                className={isSticky ? style.navsticky : style.nav}
            >
                <NavigationLink to="/" content="Portfolio" page='PORTFOLIO'/>
                <NavigationLink to="/cv" content="CV" page='CV'/>
            </Grid>
        </header>
    );
}

export default Header;