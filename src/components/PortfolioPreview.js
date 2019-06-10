import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HidePreview } from '../actions/actions';
import {Grid, Typography, Modal, ButtonBase, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root:{
        maxWidth: '80%'
    },
    header:{
        backgroundColor: '#1DC2BF',
        boxShadow: '0px 0.2px 0.5px 1px grey',
        height: 65
    },
    desc: {
        background: 'whitesmoke'
    },
    content: {
        background: 'black',
        minHeight: '75%'
    },
    btn: {
        '& button':{
            backgroundColor: '#1DC2BF',
            boxShadow: '0 0 3.5px #292929',
            width: '90%',
            height: 45,
            fontSize: '125%'
        },
        '& button:hover': {
            backgroundColor: '#424242'
        }
    },
    img:{
        height: 'auto',
        width: '100%'
    }
});

function PortfolioPreview(){
    const style = useStyle();
    const dispatch = useDispatch();
    const [isOpen, SetOpen] = useState(false);
    const detail = useSelector(state => state.preview);

    useEffect(()=>{
        if(detail != null) SetOpen(true);
        else SetOpen(false);
    }, [detail]);

    return (
        <Modal open={isOpen}>
            <Box height={1} display="flex" justifyContent="center" alignItems="center">
                <Grid container className={style.root}>
                    <Grid container item className={style.header} alignItems="center">
                        <Grid item xs={10} sm={11}>
                            <Typography variant="h5" align="center">
                                {detail == null ? '' : detail.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1} className={style.btn}>
                            <ButtonBase onClick={() => dispatch(HidePreview())} variant="contained">
                                Close
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={8} alignItems="center" className={style.content}>
                        <img className={style.img} src={detail == null ? '' : detail.imgdest}/>
                    </Grid>
                    <Grid className={style.desc} item xs>
                        {detail == null ? '' : detail.desc}
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

export default PortfolioPreview;