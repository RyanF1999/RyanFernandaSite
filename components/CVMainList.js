import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
  date: {
    fontStyle: "italic"
  },
  description: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    paddingLeft: theme.spacing(2)
  }
}));

function CVMainList(props) {
  const style = useStyle();

  const Desc = () => {
    if (props.desc !== undefined || props.desc !== '') {
      return (
        <Grid item xs={12}>
          <Typography className={style.date} variant="body2" className={style.description}>
            {props.desc}
          </Typography>
        </Grid>
      );
    }
    else {
      return null;
    }
  }

  return (
    <React.Fragment>
      <Grid item xs={6} sm={8}>
        <Typography variant="h5" component="h4" noWrap>
          {props.title}
        </Typography>
        <Typography variant="body1" noWrap>
          {props.subtitle}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography className={style.date} variant="body1" align="right">
          {props.time}
        </Typography>
      </Grid>
      <Desc />
    </React.Fragment>
  );
}

export default CVMainList;