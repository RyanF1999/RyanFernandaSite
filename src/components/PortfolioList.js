import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {Spring, config} from 'react-spring/renderprops';

const PortfolioListBase = (props) => {
    return(
        <Col 
            xs="auto" sm="6" md="6" lg="4" xg="4" 
            className={props.className + " py-4 px-2 text-center"} 
        >
            <img 
                className="img-fluid" 
                src="https://via.placeholder.com/350x150.jpg" 
                style={{
                    height: '175px',
                    transform: props.styles.transform
                }}
                onMouseOver={props.onhover}
                onMouseOut={props.oncancel}
            />
        </Col>
    );
}

class PortfolioList extends Component{
    constructor(props){
        super(props);
        this.state = {
            ishover: false,
            reset: false,
            reverse: false
        }

        this.onhover = this.onhover.bind(this);
        this.oncancel = this.oncancel.bind(this);
    }

    onhover(){
        this.setState({ishover:true});
    }

    oncancel(){
        this.setState({ishover:false});
    }
    
    render(){
        return(
        <Spring
            config={config.stiff}
            from={{
                transform: 'scale3d(1, 1, 1)'
            }}
            to={{
                transform: (this.state.ishover) 
                ? 'scale3d(1.065, 1.065, 1.065)'
                : 'scale3d(1, 1, 1)'
            }}
        >
            {(styles) => 
                <PortfolioListBase 
                    onhover={this.onhover} 
                    oncancel={this.oncancel} 
                    styles={styles} {...this.props}
                />
            }
        </Spring>);
    }
}

export default PortfolioList;