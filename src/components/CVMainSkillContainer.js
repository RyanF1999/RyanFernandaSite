import React, {useState, useEffect, useMemo} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {animated, useTrail} from 'react-spring';
import {useSelector} from 'react-redux';
import CvMainDropdownBtn from './CVMainDropdownBtn';

const StyledMainContainerTitle = styled(Row)`
    font-size: 250%;
    font-weight: bold;
`

function CvMainChilds(props){
    const delay = useMemo(
        ()=> 550 * props.children.length * 0.18, [props.children.length]
    );
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);
    // transition consist of setTimeout check if isTransition is null and not null
    const [isTransition, SetTransition] = useState(false);

    useEffect(()=>{
        if(_showChild != undefined){
            SetShow(_showChild);
            
            // cancel old set transition into null timeout
            if(isTransition != null) clearTimeout(isTransition);
            SetTransition(setTimeout(()=>SetTransition(null), delay));
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
            duration: 550
        },
        reverse: !showChild,
        immediate: _showChild == undefined ? true : false,
        native: true
    });

    if(showChild || isTransition){
        return(
            <React.Fragment>
                {
                    trail.map((style, index)=>{
                        return <animated.div className="col-6 col-lg-4" key={index} style={style}>
                            {props.children[index]}
                        </animated.div>
                    })
                }
            </React.Fragment>
        );
    }
    else{
        return(null);
    }
}

const StyledContainer = styled(Container)`
    
`

function CvMainSkillContainer(props){
    return (
        <StyledContainer fluid={true} className="pt-4">
            <StyledMainContainerTitle className="align-items-center">
                <Col xs="auto" className="px-1">
                    <CvMainDropdownBtn index={props.index}/>
                </Col>
                <Col>
                    {props.title}
                </Col>
            </StyledMainContainerTitle>
            <Row className=" pt-1 pb-2">
                <CvMainChilds index={props.index}>
                    {
                        React.Children.map(props.children, (child)=>{
                            return React.cloneElement(child, {index: props.index});
                        })
                    }
                </CvMainChilds>
            </Row>
        </StyledContainer>
    );
}

export default CvMainSkillContainer;