import React, {lazy} from 'react';
import {Row} from 'reactstrap';
import PortfolioRow from './components/PortfolioRow';
import PortfolioList from './components/PortfolioList';

const PortfolioPreview = lazy(() => import('./components/PortfolioPreview'));

function Portfolio(){
    return (
        <React.Fragment>
            <PortfolioPreview />
            <Row className="justify-content-center py-2">
                <PortfolioRow>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                    <PortfolioList/>
                </PortfolioRow>
            </Row>
        </React.Fragment>
    );
}

export default Portfolio;