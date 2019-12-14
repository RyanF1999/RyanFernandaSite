import React, { useEffect, useRef } from 'react';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { useDispatch } from 'react-redux';

import CVMainListAnim from './CVMainListAnim';
import CVMainHeader from './CVMainHeader';
import { InitPageMark } from '../actions/uiActions';

const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

function CVMainContainer(props) {
  const style = useStyle();
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(InitPageMark(props.title, ref.current));
  }, []);

  return (
    <Grid ref={ref} container item direction="column" className={style.root}>
      <CVMainHeader {...props} />
      <Grid component={List} container item>
        <CVMainListAnim index={props.index} duration={650} container>
          {props.children || []}
        </CVMainListAnim>
      </Grid>
    </Grid>
  );
}

export default CVMainContainer;