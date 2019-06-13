import React, {useEffect, useState} from 'react';
import GridRoot from './GridRoot';
import { Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {animated} from 'react-spring';
import {useSelector} from 'react-redux';
import CVScrollButton from './CVScrollButton';

const useStyle = makeStyles({
    root:{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: '75%',
        right: 0,
        zIndex: 5,
    }
});

// will receive array of data consist of: ref and title
// data: {title: string, ref: ref}
function CVScrollMark(props){
    const style = useStyle();
    const [prevSize, SetPrev] = useState(-1);
    const data = useSelector(state => state.pagemark, ()=>{
        SetPrev(data.size);
    });

    const [marks, SetMarks] = useState([]);

    useEffect(()=>{
        let tempmarks = [];
        data.forEach((value, key)=>{
            console.log(value);
            tempmarks.push(<CVScrollButton content={key} key={key} markRef={value}/>);
        })
        SetMarks(tempmarks);
    }, [prevSize]);

    return(
        <Box component={animated.div} {...props} className={style.root}
            pl={4} display='flex' alignItems='center'
        >
            <Box component={GridRoot} container direction="row" 
                bgcolor="#69C4E4" boxShadow={4}
            >
                {marks}
            </Box>
        </Box>
    )
}

export default CVScrollMark;