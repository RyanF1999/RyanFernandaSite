import React, { Component} from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import CVSideContainer from './components/CVSideContainer';
import CVSideList from './components/CVSideList';

const StyledSideCV = styled(Col)`
    background-color: pink;
`   

const StyledSideImg = styled(Row)`
    img{
        height: auto;
        width: 100%;
        border-radius: 50%;
        border: 1.5px black dashed;
    }
`

const StyledCV = styled(Row)`
    padding-bottom: 50px;
`

class CV extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <StyledCV className="justify-content-center" style={this.props.styles}>
                <Col xs="9" sm="9" md="9" lg="9" xg="9">
                    
                </Col>
                <StyledSideCV>
                    <StyledSideImg className="justify-content-center py-5">
                        <Col xs="12" sm="12" md="12" lg="10" xg="10">
                            <img className="d-block mx-auto p-1" src="https://via.placeholder.com/150"/>
                        </Col>
                    </StyledSideImg>
                    <CVSideContainer title="Test">
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    </CVSideContainer>
                    <CVSideContainer title="Test">
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                        <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    </CVSideContainer>
                </StyledSideCV>
            </StyledCV>
        );
    }
}

export default CV;