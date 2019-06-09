import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {animated, useSpring} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import { ShowCvList, HideCvList } from '../actions/actions';

const btndown = "M19.693,0.456l2.857,0l-11.27,17.328l-11.27,-17.328l2.857,0l8.413,12.934l8.413,-12.934Z";
const btnup = "M2.867,17.544l-2.857,0l11.27,-17.328l11.27,17.328l-2.857,0l-8.413,-12.934l-8.413,12.934Z";

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

export default CvMainDropdownBtn;