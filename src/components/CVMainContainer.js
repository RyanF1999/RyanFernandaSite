import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {animated, useSpring, interpolate} from 'react-spring';

const StyledMainContainerTitle = styled(Row)`
    font-size: 250%;
    font-weight: bold;
`

const StyledButton = styled(animated.div)`
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
`

const btndown = "M19.693,0.456l2.857,0l-11.27,17.328l-11.27,-17.328l2.857,0l8.413,12.934l8.413,-12.934Z";
const btnup = "M2.867,17.544l-2.857,0l11.27,-17.328l11.27,17.328l-2.857,0l-8.413,-12.934l-8.413,12.934Z";

function CvMainContainer(props){
    const [showChild, SetShow] = useState(true);
    const [isHover, SetHover] = useState(false);
    const btnAnim = useSpring({
        to:{
            shape: showChild ? btnup : btndown,
            color: showChild ? '#bc240d' : '#07b207',
            transform: isHover ? 'scale(1.5)' : 'scale(1)'
        }
    });

    const List = ()=>{
        if(showChild){
            return(
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            );
        }
        else{
            return(null);
        }
    }

    const StyledButtonInline = {borderColor: btnAnim.color};
    return (
        <Container fluid={true} className={props.className + " pt-4"}>
            <StyledMainContainerTitle className="align-items-center">
                <Col xs="auto" className="px-1">
                    <StyledButton 
                        style={StyledButtonInline}
                        onClick={() => SetShow(!showChild)}
                        onMouseOver={() => SetHover(true)}
                        onMouseOut={() => SetHover(false)}
                    >
                        <animated.svg transform={btnAnim.transform}>
                            <animated.path
                                d={btnAnim.shape} 
                                fill={btnAnim.color} 
                            />
                        </animated.svg>
                    </StyledButton>
                </Col>
                <Col>
                    {props.title}
                </Col>
            </StyledMainContainerTitle>
            <List/>
        </Container>
    );
}

const StyledMainContainer = styled(CvMainContainer)`
    
`

export default StyledMainContainer;