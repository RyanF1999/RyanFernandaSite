import React, { Component } from 'react';
import {Row} from 'reactstrap';
import PortfolioRow from './components/PortfolioRow';
import PortfolioList from './components/PortfolioList';

class Portfolio extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Row className="justify-content-center py-2">
                <PortfolioRow>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                </PortfolioRow>
                <PortfolioRow>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                </PortfolioRow>
            </Row>
        );
    }
}

export default Portfolio;