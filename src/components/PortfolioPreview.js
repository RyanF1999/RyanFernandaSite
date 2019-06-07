import React, { useState } from 'react';
import {Container, Col, Row, Modal, Button} from 'reactstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
    max-width: 75%;
`

const StyledHeader = styled(Col)`
    background-color: #1DC2BF;
    box-shadow: 0px 0.2px 0.5px 1px grey;
    text-align: center;
    font-size: 135%;
`

const StyledDesc = styled(Col)`
    background: whitesmoke;
`

const StyledContent = styled(Col)`
    background: black;
    min-height: 75%;
    height: 70vh;
    
`

const StyledCloseButton = styled(Button)`
    float: right;
    background-color: #1DC2BF;
    box-shadow: 0 0 3.5px #292929;
    :hover{
        background-color: #424242;
    }
`

function PortfolioPreview(props){
    const [isOpen, SetOpen] = useState(props.isOpen);
    return (
        <StyledModal isOpen={isOpen} centered={true}>
            <Container fluid={true} className="h-100 px-0">
                <Row className="w-100 h-100" noGutters={true}>
                    <StyledHeader xs="12" sm="12" md="12" lg="12" xg="12" className="p-2">
                        {props.title}
                        <StyledCloseButton className="h-100" onClick={() => SetOpen(false)}>
                            Close
                        </StyledCloseButton>
                    </StyledHeader>
                    <StyledContent xs="12" sm="12" md="8" lg="8" xg="9" className="h-auto py-4 px-1">
                        <Row className="align-items-center h-100">
                            <Col>
                                {props.content()}
                            </Col>    
                        </Row>
                    </StyledContent>
                    <StyledDesc xs="12" sm="12" md="4" lg="4" xg="3">
                        {props.desc}
                    </StyledDesc>
                </Row>
            </Container>
        </StyledModal>
    );
}

export default PortfolioPreview;