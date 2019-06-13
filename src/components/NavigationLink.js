import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';
import {useSpring, animated, config} from 'react-spring';
import {Grid, Typography} from '@material-ui/core';

const AnimLink = animated(Link);

function AnimatedLink(props){    
    const dispatch = useDispatch();
    const curPage = useSelector(state => state.page);
    const [active, SetActive] = useState(props.page === curPage ? true : false);
    const [hover, SetHover] = useState(false);
    const mounted = useRef(false);
    
    useEffect(()=>{
        mounted.current = true;
        return () => mounted.current = false;
    }, []);

    useEffect(()=>{
        if(mounted){
            if(props.page === curPage) SetActive(true);
            else SetActive(false);
        }
    }, [curPage]);

    const linkAnim = useSpring({
        config: config.gentle,
        to: {
            transform: active ? 'scale(1.35)' : 'scale(1.1)',
            color: (active || hover) ?'blue' : 'white',
            textDecoration: (active) ? 'underline' : (hover) ? 'none' : 'none'
        },
        native: true
    });

    return(
        <AnimLink
            to={props.to}
            innerRef={props.innerRef}
            style={linkAnim}
            onClick={() => dispatch(SetCurrentPage(props.page))} 
            onMouseEnter={() => SetHover(true)} 
            onMouseLeave={() => SetHover(false)}
        >
            {props.content}
        </AnimLink>
    );
}

function NavigationLink(props){
    const AnimLinkRoot = React.forwardRef((props, ref)=>{
        return <AnimatedLink {...props} innerRef={ref}/>
    });

    return(
        <Grid item container xs={5} sm={4} justify="center">
            <Typography
                component={AnimLinkRoot}
                {...props}
                align="center"
                display="inline"
            />
        </Grid>
    )
}

export default NavigationLink;