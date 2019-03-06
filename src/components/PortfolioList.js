import React from 'react';
import {Col} from 'reactstrap';
import styled from 'styled-components';

const PortfolioList = (props) => {
    return(
        <Col xs="auto" sm="6" md="6" lg="4" xg="4" className={props.className + " py-4 px-2 text-center"}>
            <img className="img-fluid" src="https://via.placeholder.com/350x150.jpg"/>
        </Col>
    );
}

const StyledPortfolioList = styled(PortfolioList)`
    img{
        height: 175px;
    }
`

export default StyledPortfolioList;