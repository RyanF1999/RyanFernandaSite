import React, {useState, useEffect, useMemo} from 'react';
import {animated, useTrail} from 'react-spring';
import {useSelector} from 'react-redux';
import {Grid, ListItem, Divider} from '@material-ui/core';

// need props: duration, container, alignment
function CvMainListChilds(props){
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
                        // return version with divider if not last list
                        if(index !== props.children.length-1){
                            return(
                                <React.Fragment>
                                    <ListItem 
                                        component={animated.li}
                                        key={index} 
                                        style={style}
                                    >
                                        <Grid {...props} item>
                                            {props.children[index]}
                                        </Grid>
                                    </ListItem>
                                    <Divider 
                                        component={animated.hr}
                                        key={index+10000} 
                                        style={style}
                                    />
                                </React.Fragment>
                            )
                        }else{
                            return(
                                <ListItem 
                                    component={animated.li}
                                    key={index} 
                                    style={style}
                                >
                                    <Grid {...props} item>
                                        {props.children[index]}
                                    </Grid>
                                </ListItem>
                            )
                        }
                    })
                }
            </React.Fragment>
        );
    }
    else{
        return(null);
    }
}

export default CvMainListChilds;