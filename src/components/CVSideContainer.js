import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

const StyledSideContainerTitle = styled(Row)`
    text-align: center;
    font-size: 135%;
    font-weight: bold;
`

const CvSideContainer = (props) => {

    return (
        <Container fluid={true} className={props.className + " pt-1 pb-3"}>
            <StyledSideContainerTitle>
                <Col>
                    {props.title}
                </Col>
            </StyledSideContainerTitle>
            {props.children}
        </Container>
    );
}

const StyledSideContainer = styled(CvSideContainer)`
    
`

export default StyledSideContainer;