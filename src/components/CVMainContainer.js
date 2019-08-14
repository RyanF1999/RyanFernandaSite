import React, {useEffect, useRef} from 'react';
import {List, Box, Grid} from '@material-ui/core';
import CVMainListAnim from './CVMainListAnim';
import CVMainHeader from './CVMainHeader';
import {useDispatch} from 'react-redux';
import { InitPageMark } from '../actions/actions';

function CVMainContainer(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark(props.title, ref));
    }, []);

    return (
        <Box ref={ref} component={Grid} py={2} container item direction="column">
            <CVMainHeader {...props}/>
            <Grid component={List} container item>
                <CVMainListAnim index={props.index} duration={650} container>
                    {props.children||[]}
                </CVMainListAnim>
            </Grid>
        </Box>
    );
}

export default CVMainContainer;