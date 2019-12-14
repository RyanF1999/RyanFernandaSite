import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
  img: {
    height: 300,
    width: 'auto',
    borderRadius: '50%',
    border: '1.5px black dashed',
    padding: theme.spacing(0.5),
    margin: theme.spacing(2)
  },
  description: {
    display: "flex",
    flexWrap: "wrap",
    fontStyle: "italic",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(4)
  }
}));

function CVProfileHeader(props) {
  const style = useStyle();

  return (
    <Grid item container xs direction="row" justify="center">
      <img className={style.img} src={props.img} alt="Ryan Fernanda" />
      <Typography variant="h5" component="p" className={style.description}>
        {props.desc}
      </Typography>
    </Grid>
  )
}

export default CVProfileHeader;