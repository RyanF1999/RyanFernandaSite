import React, { useState, useEffect } from 'react';
import {Container, Col, Row, Modal, Button} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { HidePreview } from '../actions/actions';

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

function PortfolioPreview(){
    const dispatch = useDispatch();
    const [isOpen, SetOpen] = useState(false);
    const detail = useSelector(state => state.preview);

    useEffect(()=>{
        if(detail != null) SetOpen(true);
        else SetOpen(false);
    }, [detail]);

    return (
        <StyledModal isOpen={isOpen} centered={true}>
            <Container fluid={true} className="h-100 px-0">
                <Row className="w-100 h-100" noGutters={true}>
                    <StyledHeader xs="12" sm="12" md="12" lg="12" xg="12" className="p-2">
                        {detail == null ? '' : detail.title}
                        <StyledCloseButton className="h-100" onClick={() => dispatch(HidePreview())}>
                            Close
                        </StyledCloseButton>
                    </StyledHeader>
                    <StyledContent xs="12" sm="12" md="8" lg="8" xg="9" className="h-auto py-4 px-1">
                        <Row className="align-items-center h-100">
                            <Col>
                                <img className="img-fluid w-100" src={detail == null ? '' : detail.imgdest}/>
                            </Col>    
                        </Row>
                    </StyledContent>
                    <StyledDesc xs="12" sm="12" md="4" lg="4" xg="3">
                        {detail == null ? '' : detail.desc}
                    </StyledDesc>
                </Row>
            </Container>
        </StyledModal>
    );
}

export default PortfolioPreview;