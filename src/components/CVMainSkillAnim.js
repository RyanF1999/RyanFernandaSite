import React, {useState, useEffect, useMemo} from 'react';
import {animated, useTrail} from 'react-spring';
import {useSelector} from 'react-redux';
import {Grid} from '@material-ui/core';

// need props: duration, container, alignment
function CVMainSkillAnim(props){
    const delay = useMemo(
        ()=> props.duration * props.children.length * 0.18, [
            props.children.length, props.duration
        ]
    );
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);
    // transition consist of setTimeout check if isTransition is null and not null
    const [isTransition, SetTransition] = useState(false);

    useEffect(()=>{
        if(_showChild !== undefined){
            SetShow(_showChild);
            
            // cancel old set transition into null timeout
            if(isTransition != null) clearTimeout(isTransition);
            SetTransition(setTimeout(()=>SetTransition(null), delay));
        }
    }, [_showChild]);

    const trail = useTrail(props.children.length, {
        from:{
            opacity: 0,
            transform: 'translate(0,-25%)'
        },
        to:{
            opacity: 1,
            transform: 'translate(0,0)'
        },
        config: {
            duration: props.duration
        },
        reverse: !showChild,
        immediate: _showChild === undefined ? true : false,
        native: true
    });

    if(showChild || isTransition){
        return(
            <React.Fragment>
                {
                    trail.map((style, index)=>{
                        return <Grid
                            {...props}
                            component={animated.div} 
                            item
                            key={index} 
                            style={style}
                        >
                            {props.children[index]}
                        </Grid>
                    })
                }
            </React.Fragment>
        );
    }
    else{
        return(null);
    }
}

export default CVMainSkillAnim;