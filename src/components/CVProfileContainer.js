import React from 'react';
import {Grid, Typography, Box, List, ListItem} from '@material-ui/core';

function CVProfileContainer(props){
    const GridRoot = React.forwardRef((props, ref)=>{
        return <Grid {...props} innerRef={ref}/>
    });

    return (
        <Grid container item xs={12} md={6} direction="column">
            <Box component={GridRoot} item fontWeight="fontWeightBold" 
                textAlign="center"
            >
                <Typography variant="h4">
                    {props.title}
                </Typography>
            </Box>
            <List item container component={GridRoot}>
                {
                    React.Children.map(props.children, (child, index)=>{
                        return(
                            <ListItem
                                component={GridRoot}
                                divider={
                                    index !== props.children.length-1 
                                    && props.children.length > 1 ? true : false
                                }
                                item
                                container
                                alignItems="flex-start"
                            >
                                {child}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Grid>
    );
}

export default CVProfileContainer;