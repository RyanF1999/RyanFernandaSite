import React, {useEffect, useState} from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import {animated} from 'react-spring';
import {useSelector} from 'react-redux';
import CVScrollButton from './CVScrollButton';

const useStyle = makeStyles(theme => ({
    root:{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        [theme.breakpoints.only('md')]:{
            left: '75%'
        },
        [theme.breakpoints.only('lg')]:{
            left: '83%'
        },
        [theme.breakpoints.only('xl')]:{
            left: '91%'
        }
    }
}));

// will receive array of data consist of: ref and title
// data: {title: string, ref: ref}
function CVScrollMark(props){
    const style = useStyle();
    const pagemark = useSelector(state => state.pagemark);
    
    return(
        <Box component={animated.div} {...props} className={style.root}
            pl={2} display='flex' alignItems='center'
        >
            <Box component={Grid} container direction="row" 
                bgcolor="#69C4E4" boxShadow={4}
            >
                {
                    Object.entries(pagemark).map(([key, value])=> <CVScrollButton 
                            key={key} 
                            content={key} 
                            markRef={value}
                        />
                    )
                }
            </Box>
        </Box>
    )
}

export default CVScrollMark;