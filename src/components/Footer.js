import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';

const Footer = (props) => {
    return(
        <Row className={props.className + " w-100"}>
            <Col>
                <p className="text-center mb-0 py-2">Copyright Ryan Fernanda</p>
            </Col>
        </Row>
    );
}

const StyledFooter = styled(Footer)`
    position: fixed;
    bottom: 0;
    background-color: green;

    p{
        font-size: 125%;
    }
`

export default StyledFooter;