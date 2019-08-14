import React from 'react';
import {Grid, Typography, Box, List, ListItem} from '@material-ui/core';

function CVProfileContainer(props){
    return (
        <Grid item xs={12} md={6}>
            <Box component={Typography} variant="h4" noWrap
                fontWeight="fontWeightBold" textAlign="center"
            >
                {props.title}
            </Box>
            <List>
                {
                    React.Children.map(props.children, (child, index)=>{
                        return(
                            <ListItem
                                component={Grid}
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