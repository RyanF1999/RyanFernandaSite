import React from 'react';
import {Grid} from '@material-ui/core';
import CVMainSkillAnim from './CVMainSkillAnim';
import CVMainHeader from './CVMainHeader';

function CVMainSkillContainer(props){
    return (
        <Grid container item direction="row" spacing={3}>
            <CVMainHeader {...props}/>
            <CVMainSkillAnim 
                index={props.index} 
                duration={550}
                container
                xs={6}
                md={4}
                spacing={1}
            >
                {
                    React.Children.map(props.children, (child)=>{
                        return React.cloneElement(child, {index: props.index});
                    })
                }
            </CVMainSkillAnim>
        </Grid>
    );
}

export default CVMainSkillContainer;