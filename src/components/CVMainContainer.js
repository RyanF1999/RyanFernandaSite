import React, {useEffect, useRef} from 'react';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {useDispatch} from 'react-redux';

import CVMainListAnim from './CVMainListAnim';
import CVMainHeader from './CVMainHeader';
import { InitPageMark } from '../actions/uiActions';

function CVMainContainer(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark(props.title, ref.current));
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