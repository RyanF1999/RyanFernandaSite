import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const StyledRow = styled(Row)`
    background-color: orange;
`

function Header(props){
    return(
        <React.Fragment>
            <StyledRow>
                <Col className="py-2">
                    <h1 className="text-center">Ryan Fernanda</h1>
                </Col>
            </StyledRow>
            <StyledRow>
                <Col>
                    <h3 className="text-center">IT Developer</h3>
                </Col>
            </StyledRow>
            <StyledRow className="justify-content-center">
                <Col xs="10" sm="8" md="8" lg="8" xg="8" className="pt-2 pb-4">
                    <Row>
                        <NavigationLink 
                            linkTo="/" 
                            content="Portfolio" 
                            page='PORTFOLIO' 
                        />
                        <NavigationLink 
                            linkTo="/cv" 
                            content="CV" 
                            page='CV'
                        />
                    </Row>
                </Col>
            </StyledRow>
        </React.Fragment>
    );
}

export default Header;