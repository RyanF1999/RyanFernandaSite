import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';
import {useSpring, animated, config} from 'react-spring';
import {Grid, Typography} from '@material-ui/core';

function AnimatedLink(props){
    const dispatch = useDispatch();
    const curPage = useSelector(state => state.page);
    const [active, SetActive] = useState(props.page == curPage ? true : false);
    const [hover, SetHover] = useState(false);

    useEffect(()=>{
        if(props.page == curPage) SetActive(true);
        else SetActive(false);
    }, [curPage]);

    const linkAnim = useSpring({
        config: config.gentle,
        from: {
            fontSize: '135%',
            color: 'white'
        },
        to: {
            fontSize: active ? '165%' : '135%',
            color: (active || hover) ?'blue' : 'white',
            textDecoration: (active) ? 'underline' : (hover) ? 'none' : 'none'
        },
        native: true
    });

    return(
        <Typography
            component={animated.h6}
            align="center"
            display="inline"
            variant="h6"
            style={linkAnim}
            onClick={() => dispatch(SetCurrentPage(props.page))} 
            onMouseEnter={() => SetHover(true)} 
            onMouseLeave={() => SetHover(false)}
        >
            {props.content}
        </Typography>
    );
}

function NavigationLink(props){
    return(
        <Grid item container xs={5} sm={4} justify="center">
            <Link to={props.linkTo} style={{textDecoration: 'none'}}>
                <AnimatedLink content={props.content} page={props.page}/>
            </Link>
        </Grid>
    )
}

export default NavigationLink;