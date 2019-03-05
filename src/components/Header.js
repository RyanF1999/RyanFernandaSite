import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledHeader = styled(Row)`
    background-color: orange;
`

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StyledHeader>
                <Row className="w-100">
                    <Col>
                        <h1 className="text-center pt-2 pb-4">Ryan Fernanda</h1>
                    </Col>
                </Row>
                <Row className="w-100 justify-content-center">
                    <Col xs="10" sm="8" md="8" lg="8" xg="8">
                        <Row>
                            <Col className="text-center">
                                <Link to="/">
                                    Portfolio
                                </Link>
                            </Col>
                            <Col className="text-center">
                                <Link to="/cv">
                                    CV
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </StyledHeader>
        );
    }
}

export default Header;