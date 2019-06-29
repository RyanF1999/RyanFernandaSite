import React, {useMemo, useState, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';
import {useSelector} from 'react-redux';
import {Grid, Typography, Box} from '@material-ui/core';

function Progress(props){
    const width = useMemo(
        ()=>props.cur/props.max * 100, [props.cur, props.max]
    );
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);

    useEffect(()=>{
        if(_showChild !== undefined){
            SetShow(_showChild);
        }
    }, [_showChild]);

    const progressAnim = useSpring({
        from:{
            width: '0%',
            backgroundColor: '#257a0b'
        },
        to:{
            width: showChild ? width+'%' : '0%',
            backgroundColor: showChild ? '#e8980d' : '#257a0b'
        },
        config: {
            mass: 5,
            tension: 100,
            friction: 40
        },
        native: true
    });

    return(
        <Box component={animated.div} style={progressAnim} 
            borderRadius={15} height='100%'
        />
    );
}

// have props: cur. max, index
function CVMainSkillList(props){
    return (
        <React.Fragment>
            <Box component={Grid} item pt={2} px={1} xs={12} fontWeight="fontWeightBold">
                <Typography variant="h5">
                    {props.title}
                </Typography>
            </Box>
            <Box component={Grid} item xs={12} px={1}>
                <Box height={30} borderRadius={15} bgcolor='#d6d6d6'>
                    <Progress {...props}/>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default CVMainSkillList;