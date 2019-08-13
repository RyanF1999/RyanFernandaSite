import React, {useState} from 'react';
import {useSpring, animated, config} from 'react-spring';
import {Grid, Card, CardContent, CardHeader, CardMedia, Typography, Box, makeStyles} from '@material-ui/core';

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
        textAlign: 'center',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    },
    wrap: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
    }
});

const CardContentTypography = React.forwardRef((props, ref)=>
    <CardContent component={Typography} {...props} innerRef={ref}/>
);

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
            onClick={()=>{window.location.href = props.link||'';}}
        >
            <CardHeader title={props.title} className={style.title}/>
            <CardMedia title={props.title} image={props.image} className={style.img}/>
            <Box component={CardContentTypography} minHeight={50} 
                fontWeight="fontWeightLight" className={style.wrap}
            >
                {props.desc}
            </Box>
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