import React, {useState, useEffect} from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';
import {Spring, config} from 'react-spring/renderprops';

function NavigationLink(props){
    const dispatch = useDispatch();
    const curPage = useSelector(state => state.page);
    const [active, SetActive] = useState(props.page == curPage ? true : false);
    const [hover, SetHover] = useState(false);

    useEffect(()=>{
        if(props.page == curPage) SetActive(true);
        else SetActive(false);
    }, [curPage]);
    
    return(
        <Spring
            items={active}
            config={config.gentle}
            from={{
                fontSize: '135%',
                color: 'white'
            }}
            to={{
                fontSize: active ? '165%' : '135%',
                color: 
                    (active || hover) ?
                    'blue' : 'white'
                ,
                textDecoration:
                    (active) ? 'underline' 
                    : (hover) ? 'none'
                    : 'none'
            }}
        >
            {(styles) => 
                <Col className={"text-center"} page={props.page}>
                    <Link 
                        to={props.linkTo} 
                        onClick={() => dispatch(SetCurrentPage(props.page))} 
                        style={styles} 
                        onMouseOver={() => SetHover(true)} 
                        onMouseOut={() => SetHover(false)}
                    >
                        {props.content}
                    </Link>
                </Col>}
        </Spring>
    )
}

export default NavigationLink;