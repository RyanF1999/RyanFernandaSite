import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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