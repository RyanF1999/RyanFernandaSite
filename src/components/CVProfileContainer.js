import React from 'react';
import {Grid, Typography, Box, List, ListItem} from '@material-ui/core';

function CVProfileContainer(props){
    const ListRoot = React.forwardRef((props, ref)=>{
        return <List {...props} innerRef={ref}/>
    });
    const ListItemRoot = React.forwardRef((props, ref)=>{
        return <ListItem {...props} innerRef={ref}/>
    });

    return (
        <Grid container item xs={12} md={6} spacing={1} direction="column">
            <Grid item>
                <Box fontWeight="fontWeightBold" textAlign="center">
                    <Typography variant="h3">
                        {props.title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item container component={ListRoot}>
                {
                    React.Children.map(props.children, (child, index)=>{
                        return(
                            <Grid
                                component={ListItemRoot}
                                divider={
                                    index !== props.children.length-1 
                                    && props.children.length > 1 ? true : false
                                }
                                item
                                container
                            >
                                {child}
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
}

export default CVProfileContainer;