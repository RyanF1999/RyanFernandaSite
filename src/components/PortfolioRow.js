import React from 'react';
import {Row} from 'reactstrap';
import styled from 'styled-components';

const PortfolioRow = (props) => {
    return(
        <Row className={props.className + " justify-content-center align-items-center w-100"}>
            {props.children}
        </Row>
    );
}

const StyledPortfolioRow = styled(PortfolioRow)`
    height: 33%;
`

export default StyledPortfolioRow;