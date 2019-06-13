import React from 'react';
import GridRoot from './GridRoot';
import {Box} from '@material-ui/core';
import CVMainSkillAnim from './CVMainSkillAnim';
import CVMainHeader from './CVMainHeader';

function CVMainSkillContainer(props){


    return (
        <Box ref={ref} component={GridRoot} py={2} container item direction="row">
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