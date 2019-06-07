import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';

function Footer(props){
    return(
        <Row className={props.className + " w-100"}>
            <Col>
                <p className="text-center mb-0 py-2">Copyright Ryan Fernanda</p>
            </Col>
        </Row>
    );
}

const StyledFooter = styled(Footer)`
    position: absolute;
    bottom: 0;
    background-color: black;
    height: 50px;

    p{
        color: white;
        font-size: 125%;
    }
`

export default StyledFooter;