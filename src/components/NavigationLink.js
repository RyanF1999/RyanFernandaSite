import React, {useState, useEffect, useRef} from 'react';

import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {useSelector, useDispatch} from 'react-redux';
import {useSpring, animated, config} from 'react-spring';

import {SetCurrentPage} from '../actions/uiActions';

const AnimLink = animated(Link);

const AnimatedLink = React.forwardRef((props, ref)=>{
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
            innerRef={ref}
            style={linkAnim}
            onClick={() => dispatch(SetCurrentPage(props.page))} 
            onMouseEnter={() => SetHover(true)} 
            onMouseLeave={() => SetHover(false)}
        >
            {props.content}
        </AnimLink>
    );
});

function NavigationLink(props){
    return(
        <Grid item container xs={5} sm={4} justify="center">
            <Typography
                component={AnimatedLink}
                {...props}
                align="center"
                display="inline"
            />
        </Grid>
    )
}

export default NavigationLink;