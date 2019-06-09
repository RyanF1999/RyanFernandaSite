import React, {useState, useEffect} from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';
import {useSpring, animated, config} from 'react-spring';

function AnimatedLink(props){
    const dispatch = useDispatch();
    const curPage = useSelector(state => state.page);
    const [active, SetActive] = useState(props.page == curPage ? true : false);
    const [hover, SetHover] = useState(false);

    useEffect(()=>{
        if(props.page == curPage) SetActive(true);
        else SetActive(false);
    }, [curPage]);

    const linkAnim = useSpring({
        config: config.gentle,
        from: {
            fontSize: '135%',
            color: 'white'
        },
        to: {
            fontSize: active ? '165%' : '135%',
            color: (active || hover) ?'blue' : 'white',
            textDecoration: (active) ? 'underline' : (hover) ? 'none' : 'none'
        },
        native: true
    });

    return(
        <animated.p 
            className="d-inline-block"
            style={linkAnim}
            onClick={() => dispatch(SetCurrentPage(props.page))} 
            onMouseEnter={() => SetHover(true)} 
            onMouseLeave={() => SetHover(false)}
        >
            {props.content}
        </animated.p>
    );
}

function NavigationLink(props){
    return(
        <Col className={"text-center"}>
            <Link to={props.linkTo}>
                <AnimatedLink content={props.content} page={props.page}/>
            </Link>
        </Col>
    )
}

export default NavigationLink;