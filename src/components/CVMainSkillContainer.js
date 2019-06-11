import React from 'react';
import CvMainDropdownBtn from './CVMainDropdownBtn';
import {Grid, Typography} from '@material-ui/core';
import CvMainChilds from './CVMainChilds';

function CvMainSkillContainer(props){
    return (
        <Grid container item direction="row" spacing={3}>
            <Grid container item alignItems="center" direction="row" spacing={4}>
                <Grid item xs="auto">
                    <CvMainDropdownBtn index={props.index}/>
                </Grid>
                <Grid>
                    <Typography variant="h4">
                        {props.title}
                    </Typography>
                </Grid>
            </Grid>
            <CvMainChilds 
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
            </CvMainChilds>
        </Grid>
    );
}

export default CvMainSkillContainer;