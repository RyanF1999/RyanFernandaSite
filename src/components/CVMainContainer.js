import React, {useEffect, useRef} from 'react';
import GridRoot from './GridRoot';
import {List, Box} from '@material-ui/core';
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
        <Box ref={ref} component={GridRoot} py={2} container item direction="column">
            <CVMainHeader {...props}/>
            <List>
                <CVMainListAnim 
                    index={props.index} 
                    duration={650}
                    container
                >
                    {props.children}
                </CVMainListAnim>
            </List>
        </Box>
    );
}

export default CVMainContainer;