import React, { useMemo, useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';

const useStyle = makeStyles(theme => ({
  progress: {
    borderRadius: 15,
    height: '100%'
  },
  progressBackground: {
    borderRadius: 15,
    backgroundColor: '#d6d6d6',
    height: 30,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));


function Progress(props) {
  const style = useStyle();
  const width = useMemo(
    () => props.cur / props.max * 100, [props.cur, props.max]
  );
  const _showChild = useSelector(state => state.cvlist[props.index]);
  const [showChild, SetShow] = useState(true);

  useEffect(() => {
    if (_showChild !== undefined) {
      SetShow(_showChild);
    }
  }, [_showChild]);

  const progressAnim = useSpring({
    from: {
      width: '0%',
      backgroundColor: '#257a0b'
    },
    to: {
      width: showChild ? width + '%' : '0%',
      backgroundColor: showChild ? '#e8980d' : '#257a0b'
    },
    config: {
      mass: 5,
      tension: 100,
      friction: 40
    },
    native: true
  });

  return <animated.div style={progressAnim} className={style.progress}/>;
}

// have props: cur. max, index
function CVMainSkillList(props) {
  const style = useStyle();

  return (
    <React.Fragment>
      <Typography variant="h5" component="h4" noWrap className={style.title}>
        {props.title}
      </Typography>
      <Grid item xs={12} className={style.progressBackground}>  
        <Progress {...props} />
      </Grid>
    </React.Fragment>
  );
}

export default CVMainSkillList;