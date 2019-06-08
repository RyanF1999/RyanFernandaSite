import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';

const StyledTitle = styled(Col)`
    font-size: 150%;
`

const StyledSubTitle = styled(Col)`
    font-size: 125%;
`

const StyledDesc = styled(Col)`
    font-size: 100%;
`

const StyledTime = styled(Col)`
    font-size: 125%;
    text-align: center;
`

function CvSideContainer(props){
    const Desc = ()=>{
        if(props.desc != undefined || props.desc != ''){
            return(
                <StyledDesc xs="12" className="pt-1 px-4">
                    {props.desc}
                </StyledDesc>
            );
        }
        else{
            return(null);
        }
    }

    return (
        <Row className={props.className + " pt-1 pb-2"}>
            <Col>
                <Row>
                    <Col xs="6" md="8">
                        <Row>
                            <StyledTitle xs="12">
                                {props.title}
                            </StyledTitle>
                            <StyledSubTitle xs="12">
                                {props.subtitle}
                            </StyledSubTitle>
                        </Row>
                    </Col>
                    <StyledTime className="align-self-center">
                        {props.time}
                    </StyledTime>
                    <Desc/>
                </Row>
            </Col>
        </Row>
    );
}

const StyledSideContainer = styled(CvSideContainer)`
    
`

export default StyledSideContainer;