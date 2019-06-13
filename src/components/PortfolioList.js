import React, {useState} from 'react';
import {useSpring, animated, config} from 'react-spring';
import {Grid, Card, CardContent, CardHeader, CardMedia, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#F2F3F3',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    img: {
        height: 250
    },
    title: {
        textAlign: 'center'
    }
});

function AnimatedList(props){
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

    return(
        <Card
            className={style.root}
            component={animated.div}
            style={anim}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=>{}}
        >
            <CardHeader title={props.title} className={style.title}/>
            <CardMedia title={props.title} image={props.image} className={style.img}/>
            <CardContent>
                <Box height={50} fontWeight="fontWeightLight">
                    <Typography>
                        {props.desc}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

function PortfolioList(props){
    return(
        <Grid item container xs={11} sm={10} md={6} lg={4} justify="center">
            <AnimatedList {...props}/>
        </Grid>
    );
}

export default PortfolioList;