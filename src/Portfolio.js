import React, {lazy, useState} from 'react';
import {Row} from 'reactstrap';
import PortfolioRow from './components/PortfolioRow';
import PortfolioList from './components/PortfolioList';

const PortfolioPreview = lazy(() => import('./components/PortfolioPreview'));

function Portfolio(){
    const [showPreview, SetShowPreview] = useState(false);

    let preview;
    if(showPreview){
        preview = <PortfolioPreview isOpen={true} title="Test" 
        content={()=>(
            <img className="img-fluid w-100" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            )} desc="Test"
        />
    }

    return (
        <React.Fragment>
            {preview}
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