import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
  img: {
    height: 'auto',
    width: '100%',
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  },
  content: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    overflow: 'hidden'
  },
  title: {
    marginBottom: theme.spacing(0.5)
  },
  description: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    marginBottom: theme.spacing(0.5)
  }
}));

function CVProfileList(props) {
  const style = useStyle();

  let arrDesc;
  if (props.desc.constructor === Array)
    arrDesc = props.desc;
  else
    arrDesc = [props.desc];

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <img className={style.img} src={props.icon} alt={props.alt} />
      </Grid>
      <Grid item xs={8} container direction="column" className={style.content}>
        <Typography component="h4" variant="h5" className={style.title}>
          {props.title}
        </Typography>
        <Grid item xs={12}>
          {
            arrDesc.map((desc, index) =>
              <Typography key={index} variant="body1" className={style.description}>
                {desc}
              </Typography>
            )
          }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CVProfileList;