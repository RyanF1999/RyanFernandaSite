import React, {useMemo, useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {animated, useSpring} from 'react-spring';
import {useSelector} from 'react-redux';

const StyledTitle = styled(Col)`
    font-size: 150%;
`

const StyledBackgroundProgress = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 15px;
    background-color: #d6d6d6;

    div{
        height: 100%;
        border-radius: 15px;
    }
`

function Progress(props){
    const width = useMemo(
        ()=>props.cur/props.max * 100, [props.cur, props.max]
    );
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);

    useEffect(()=>{
        if(_showChild != undefined){
            SetShow(_showChild);
        }
    }, [_showChild]);

    const progressAnim = useSpring({
        from:{
            width: '0%',
            backgroundColor: '#257a0b'
        },
        to:{
            width: showChild ? width+'%' : '0%',
            backgroundColor: showChild ? '#e8980d' : '#257a0b'
        },
        config: {
            mass: 5,
            tension: 100,
            friction: 40
        },
        native: true
    });

    return(
        <animated.div style={progressAnim}/>
    );
}

function CvMainSkillList(props){    
    return (
        <Row>
            <StyledTitle xs="12">
                {props.title}
            </StyledTitle>
            <Col xs="12">
                <StyledBackgroundProgress className="mt-1 mb-2">
                    <Progress cur={props.cur} max={props.max} index={props.index}/>
                </StyledBackgroundProgress>
            </Col>
        </Row>
    );
}

export default CvMainSkillList;