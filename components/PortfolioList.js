import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { useSpring, animated, config } from 'react-spring';

const useStyle = makeStyles({
  root: {
    backgroundColor: '#F2F3F3',
    width: '100%'
  },
  img: {
    height: 250
  },
  title: {
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  },
  description: {
    minHeight: 50,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  }
});

function AnimatedList(props) {
  const style = useStyle();
  const [ishover, setHover] = useState(false);

  const anim = useSpring({
    config: config.stiff,
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    to: {
      transform: (ishover)
        ? 'scale3d(1.05, 1.05, 1.05)'
        : 'scale3d(1, 1, 1)'
    },
    native: true
  });

  return (
    <Card
      className={style.root}
      component={animated.div}
      style={anim}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.location.href = props.link || ''}
    >
      <CardHeader title={props.title} className={style.title} />
      <CardMedia title={props.title} image={props.image} className={style.img} />
      <CardContent>
        <Typography className={style.description}>
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function PortfolioList(props) {
  return (
    <Grid item container xs={11} sm={10} md={6} lg={4} justify="center">
      <AnimatedList {...props} />
    </Grid>
  );
}

export default PortfolioList;