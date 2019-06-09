import React, {useState} from 'react';
import {Col} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {useSpring, animated, config} from 'react-spring';
import { ShowPreview } from '../actions/actions';

function AnimatedImage(){
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
            className="img-fluid" 
            src="https://via.placeholder.com/350x150.jpg" 
            style={{
                ...imgAnim,
                height: '175px'
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=> dispatch(ShowPreview(previewData))}
        />
    );
}

function PortfolioList(props){
    return(
        <Col xs="auto" sm="6" md="6" lg="4" xg="4" 
            className={props.className + " py-4 px-2 text-center"}
        >
            <AnimatedImage/>
        </Col>
    );
}

export default PortfolioList;