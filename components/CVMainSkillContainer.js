import React, {useEffect, useRef} from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {useDispatch} from 'react-redux';

import CVMainSkillAnim from './CVMainSkillAnim';
import CVMainHeader from './CVMainHeader';
import { InitPageMark } from '../actions/uiActions';

function CVMainSkillContainer(props){
    const dispatch = useDispatch();
    const ref = useRef();

    useEffect(()=>{
        dispatch(InitPageMark(props.title, ref.current));
    }, []);

    return (
        <Box ref={ref} component={Grid} py={2} container item direction="row">
            <CVMainHeader {...props}/>
            <CVMainSkillAnim 
                index={props.index} 
                duration={550}
                container
                xs={12}
                sm={6}
                md={4}
            >
                {
                    React.Children.map(props.children, (child)=>{
                        return React.cloneElement(child, {index: props.index});
                    })
                }
            </CVMainSkillAnim>
        </Box>
    );
}

export default CVMainSkillContainer;