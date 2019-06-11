import React from 'react';
import {Grid} from '@material-ui/core';
import CvMainChilds from './CVMainChilds';
import CvMainHeader from './CVMainHeader';

function CvMainSkillContainer(props){
    return (
        <Grid container item direction="row" spacing={3}>
            <CvMainHeader {...props}/>
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