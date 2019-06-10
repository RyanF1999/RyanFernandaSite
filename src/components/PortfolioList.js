import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useSpring, animated, config} from 'react-spring';
import { ShowPreview } from '../actions/actions';
import {Grid, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root:{
        height: 175
    },
    img:{
        height: 'auto',
        width: '100%'
    }
});

function AnimatedImage(props){
    const dispatch = useDispatch();
    const previewData = {
        title: 'test',
        desc: 'test',
        imgdest: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
    const [ishover, setHover] = useState(false);
    
    const imgAnim = useSpring({
        config: config.stiff,
        from: {
            transform: 'scale3d(1, 1, 1)'
        },
        to: {
            transform: (ishover) 
            ? 'scale3d(1.065, 1.065, 1.065)'
            : 'scale3d(1, 1, 1)'
        },
        native: true
    });

    return(
        <animated.img
            className={props.style} 
            src="https://via.placeholder.com/350x150.jpg" 
            style={imgAnim}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=> dispatch(ShowPreview(previewData))}
        />
    );
}

function PortfolioList(){
    const style = useStyle();

    return(
        <Grid item container xs={12} sm={6} lg={4} justify="center" className={style.root}>
            <AnimatedImage style={style.img}/>
        </Grid>
    );
}

export default PortfolioList;