import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function CVProfileContainer(props) {

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h4" component="h3" noWrap>
        {props.title}
      </Typography>
      <List>
        {
          React.Children.map(props.children, (child, index) => {
            const divider = index !== props.children.length - 1 
              && props.children.length > 1 ? true : false;

            return (
              <ListItem divider={divider}>
                <Grid container alignItems="flex-start">
                  {child}
                </Grid>
              </ListItem>
            )
          })
        }
      </List>
    </Grid>
  );
}

export default CVProfileContainer;