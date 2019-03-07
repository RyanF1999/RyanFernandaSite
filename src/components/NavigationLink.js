import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';
import {Spring, config} from 'react-spring/renderprops';

class NavigationLink extends Component{
    constructor(props){
        super(props);
        if(props.page == props.curPage){
            this.state = {
                active: true,
                hover: false
            }
        }else{
            this.state = {
                active: false,
                hover: false
            }
        }

        this.onhover = this.onhover.bind(this);
        this.oncancel = this.oncancel.bind(this);
    }

    componentWillReceiveProps(next){
        if(this.props.page == next.curPage){ 
            this.setState({active: true});
        }else{
            this.setState({active: false});
        }
    }

    onhover(){
        if(!this.state.hover)
            this.setState({hover:true});
    }

    oncancel(){
        if(this.state.hover)
            this.setState({hover:false});
    }

    render(){
        return(
            <Spring
                items={this.state.active}
                config={config.gentle}
                from={{
                    fontSize: '135%',
                    color: 'white'
                }}
                to={{
                    fontSize: this.state.active ? '165%' : '135%',
                    color: 
                        (this.state.active || this.state.hover) ?
                        'blue' : 'white'
                    ,
                    textDecoration:
                        (this.state.active) ? 'underline' 
                        : (this.state.hover) ? 'none'
                        : 'none'
                }}
            >
                {(styles) => 
                    <Col className={"text-center"} page={this.props.page}>
                        <Link to={this.props.linkTo} onClick={this.props.onclick} 
                            style={styles} 
                            onMouseOver={this.onhover} 
                            onMouseOut={this.oncancel}
                        >
                            {this.props.content}
                        </Link>
                    </Col>}
            </Spring>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        curPage: state.page
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        onclick: ()=>{dispatch(SetCurrentPage(props.page))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLink);