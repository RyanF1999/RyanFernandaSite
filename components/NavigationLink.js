import React, {useState, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {useSpring, animated, config} from 'react-spring';

const AnimatedLink = React.forwardRef((props, ref)=>{
    const router = useRouter();
    const [active, SetActive] = useState(props.to === router.pathname ? true : false);
    const [hover, SetHover] = useState(false);
    const mounted = useRef(false);
    
    useEffect(()=>{
        mounted.current = true;
        return () => mounted.current = false;
    }, []);

    useEffect(()=>{
        if(mounted){
            if(props.to === router.pathname) SetActive(true);
            else SetActive(false);
        }
    }, [router]);

    const linkAnim = useSpring({
        config: config.gentle,
        to: {
            transform: active ? 'scale(1.35)' : 'scale(1.1)',
            color: (active || hover) ?'blue' : 'white',
            textDecoration: (active) ? 'underline' : (hover) ? 'none' : 'none',
            userSelect: 'none'
        },
        native: true
    });

    return(
        <Link href={props.to}>
            <animated.a ref={ref}
                style={linkAnim}
                onMouseEnter={() => SetHover(true)} 
                onMouseLeave={() => SetHover(false)}
            >
                {props.content}
            </animated.a>
        </Link>
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