import React from 'react';
import {Grid} from '@material-ui/core';
import CVProfileContainer from './CVProfileContainer';
import CVProfileList from './CVProfileList';

function CVProfileContent(props){
    return(
        <Grid item container md={12} direction="row" spacing={4}>
            <CVProfileContainer title="Test">
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
            </CVProfileContainer>
            <CVProfileContainer title="Test">
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
            </CVProfileContainer>
            <CVProfileContainer title="Test">
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
            </CVProfileContainer>
            <CVProfileContainer title="Test">
                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
            </CVProfileContainer>
        </Grid>
    )
}

export default CVProfileContent;