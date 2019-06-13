import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import GridRoot from './GridRoot';
import { Box, ButtonBase} from '@material-ui/core';
import {animated, useSpring} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import {SetCurrentPageMark} from '../actions/actions';

const ButtonRoot = React.forwardRef((props, ref)=>{
    return <ButtonBase component={animated.button} {...props} innerRef={ref}/>
});

function CVScrollButton(props){
    const dispatch = useDispatch();
    const curpagemark = useSelector(state => state.curpagemark);
    const _curpagemark = useRef(curpagemark);
    const [active, SetActive] = useState(false);
    const [hover, SetHover] = useState(false);

    // will make navigation into fixed after stuck in top
    const mark = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            //console.log(`pagemark ${props.content}`);
            //console.log(_curpagemark.current);
            if(entry.isIntersecting && !_curpagemark.current.moving){
                //console.log(`dispatch ${props.content}`);
                dispatch(SetCurrentPageMark(props.content, false));
            }else if(_curpagemark.current.moving && 
            _curpagemark.current.title === props.content){
                // finish scrolling and update curpagemark moving state to false
                //console.log('finish');
                dispatch(SetCurrentPageMark(props.content, false));
            }
        })
    }, {threshold: 0.1, rootMargin: '-30%'});

    useEffect(()=>{
        mark.observe(props.markRef.current);
        return ()=>mark.disconnect()
    }, []);

    useEffect(()=>{
        _curpagemark.current = curpagemark;
        if(props.content === _curpagemark.current.title && !active){
            // set active for animation and scroll to markRef
            SetActive(true);
            if(_curpagemark.current.moving){
                let target = ReactDOM.findDOMNode(props.markRef.current);
                target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
        }
        else if(props.content !== _curpagemark.current.title && active) SetActive(false);
    }, [curpagemark]);

    const anim = useSpring({
        to:{
            fontSize: active || hover ? '200%' : '150%',
            border: active ? '10px solid' : '0px solid'
        },
        config:{
            mass: 1,
            tension: 350,
            friction: 30,
            clamp: true
        },
        native: true
    });

    return(
        <Box component={GridRoot} item xs={12} height={75}>
            <Box component={ButtonRoot} height="100%" width="100%"
                centerRipple borderColor='#0d64c6'
                style={anim}
                onClick={()=>dispatch(SetCurrentPageMark(props.content, true))}
                onMouseEnter={()=>SetHover(true)}
                onMouseLeave={()=>SetHover(false)}
                fontWeight='fontWeightMedium'
            >
                {props.content}
            </Box>
        </Box>
    )
}

export default CVScrollButton;