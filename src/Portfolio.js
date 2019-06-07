import React, { Component, lazy} from 'react';
import {Row} from 'reactstrap';
import PortfolioRow from './components/PortfolioRow';
import PortfolioList from './components/PortfolioList';

const PortfolioPreview = lazy(() => import('./components/PortfolioPreview'));

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPreview: false
        }
    }

    render() {
        let preview;
        if(this.state.showPreview){
            preview = 
            <PortfolioPreview isOpen={true} title="Test" 
            content={()=>(
                <img className="img-fluid w-100" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                )} desc="Test"
            />
        }

        return (
            <React.Fragment>
                {preview}
                <Row className="justify-content-center py-2" style={this.props.styles}>
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
}

export default Portfolio;