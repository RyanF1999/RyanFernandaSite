import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';

const StyledTitle = styled(Col)`
    font-size: 100%;
`

const StyledDesc = styled(Col)`
    font-size: 80%;
`

const StyledImg = styled.img`
    height: auto;
    width: 100%;
`

const CvSideContainer = (props) => {
    let arrDesc;
    if(props.desc.constructor == Array)
        arrDesc = props.desc;
    else
        arrDesc = [props.desc];

    let descriptions = arrDesc.map(
        desc => <StyledDesc xs="12">
            {desc}
        </StyledDesc>
    )

    return (
        <Row className={props.className + " pt-1 pb-2"}>
            <Col xs="3" className="px-0 align-self-center">
                <StyledImg src={props.icon}/>
            </Col>
            <Col>
                <Row>
                    <StyledTitle xs="12">
                        {props.title}
                    </StyledTitle>
                    {descriptions}
                </Row>
            </Col>
        </Row>
    );
}

const StyledSideContainer = styled(CvSideContainer)`
    
`

export default StyledSideContainer;