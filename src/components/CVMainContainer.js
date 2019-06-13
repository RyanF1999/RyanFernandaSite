import React from 'react';
import {Grid, List, Box} from '@material-ui/core';
import CVMainListAnim from './CVMainListAnim';
import CVMainHeader from './CVMainHeader';

function CVMainContainer(props){
    const GridRoot = React.forwardRef((props, ref)=>{
        return <Grid {...props} innerRef={ref}/>
    });

    return (
        <Box component={GridRoot} py={2} container item direction="column">
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