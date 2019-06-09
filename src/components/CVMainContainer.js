import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {animated, useSpring, useTrail} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import { ShowCvList, HideCvList } from '../actions/actions';

const btndown = "M19.693,0.456l2.857,0l-11.27,17.328l-11.27,-17.328l2.857,0l8.413,12.934l8.413,-12.934Z";
const btnup = "M2.867,17.544l-2.857,0l11.27,-17.328l11.27,17.328l-2.857,0l-8.413,-12.934l-8.413,12.934Z";

const StyledMainContainerTitle = styled(Row)`
    font-size: 250%;
    font-weight: bold;
`

const StyledButton = animated(styled.div`
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: 2px solid black;
    padding: 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: border-color;
    svg{
        width: 25px;
        height: 20px;
        will-change: transform;
    }
`)

function CvMainDropdownBtn(props){
    const dispatch = useDispatch();
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);
    const [isHover, SetHover] = useState(false);

    useEffect(()=>{
        if(_showChild != undefined) SetShow(_showChild);
    }, [_showChild]);
    
    const btnAnim = useSpring({
        to:{
            shape: showChild ? btnup : btndown,
            color: showChild ? '#bc240d' : '#07b207',
            transform: isHover ? 'scale(1.5)' : 'scale(1)'
        }
    });

    const StyledButtonInline = {borderColor: btnAnim.color};
    return (
        <StyledButton 
            style={StyledButtonInline}
            onClick={
                () => showChild 
                ? dispatch(HideCvList(props.index)) 
                : dispatch(ShowCvList(props.index))
            }
            onMouseEnter={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
        >
            <animated.svg transform={btnAnim.transform}>
                <animated.path
                    d={btnAnim.shape} 
                    fill={btnAnim.color} 
                />
            </animated.svg>
        </StyledButton>
    );
}

function CvMainChilds(props){
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);
    const [isTransition, SetTransition] = useState(false);

    useEffect(()=>{
        if(_showChild != undefined){
            SetShow(_showChild);
            SetTransition(true);
            setTimeout(()=>SetTransition(false), 700);
        }
    }, [_showChild]);

    const trail = useTrail(props.children.length, {
        from:{
            opacity: 0,
            transform: 'translate(0,-25%)'
        },
        to:{
            opacity: 1,
            transform: 'translate(0,0)'
        },
        config: {
			mass: 10,
			tension: 450,
			friction: 15,
			clamp: true
        },
        reverse: !showChild,
        immediate: _showChild == undefined ? true : false,
        native: true
    });

    if(showChild || isTransition){
        return(
            <React.Fragment>
                {
                    trail.map((style, index)=>
                        <animated.div key={index} style={style}>
                            {props.children[index]}
                        </animated.div>
                    )
                }
            </React.Fragment>
        );
    }
    else{
        return(null);
    }
}

function CvMainContainer(props){
    return (
        <Container fluid={true} className={props.className + " pt-4"}>
            <StyledMainContainerTitle className="align-items-center">
                <Col xs="auto" className="px-1">
                    <CvMainDropdownBtn index={props.index}/>
                </Col>
                <Col>
                    {props.title}
                </Col>
            </StyledMainContainerTitle>
            <CvMainChilds index={props.index}>{props.children}</CvMainChilds>
        </Container>
    );
}

const StyledMainContainer = styled(CvMainContainer)`
    
`

export default StyledMainContainer;