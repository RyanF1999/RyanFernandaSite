import React, {useMemo, useState, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';
import {useSelector} from 'react-redux';
import {Grid, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root:{
        width: '100%',
        height: 30,
        borderRadius: 15,
        backgroundColor: '#d6d6d6'
    },
    progress:{
        height: '100%',
        borderRadius: 15
    }
});

function Progress(props){
    const width = useMemo(
        ()=>props.cur/props.max * 100, [props.cur, props.max]
    );
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);

    useEffect(()=>{
        if(_showChild != undefined){
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
        <animated.div className={props.className} style={progressAnim}/>
    );
}

// have props: cur. max, index
function CvMainSkillList(props){    
    const style = useStyle();

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Box fontWeight="fontWeightBold">
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <div className={style.root}>
                    <Progress {...props} className={style.progress}/>
                </div>
            </Grid>
        </React.Fragment>
    );
}

export default CvMainSkillList;