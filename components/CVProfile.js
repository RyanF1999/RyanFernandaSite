import React, { useEffect, useRef } from 'react';

import Grid from '@material-ui/core/Grid';

import { useDispatch } from 'react-redux';
import { InitPageMark } from '../actions/uiActions';

function CVProfile(props) {
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(InitPageMark('Profile', ref.current));
  }, []);

  return (
    <Grid ref={ref} container direction="column" alignItems="center">
      {props.children}
    </Grid>
  )
}

export default CVProfile;