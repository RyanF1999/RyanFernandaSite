import React from 'react';
import {Col} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {SetCurrentPage} from '../actions/actions';

const NavigationLinkBase = (props) => {
    return(
        <Col className={props.className + " text-center "} page={props.page}>
            <Link to={props.linkTo} onClick={props.onclick}>
                {props.content}
            </Link>
        </Col>
    );
}

const StyledNavigationLink = styled(NavigationLinkBase)`
    a{
        font-size: 150%;
        color: white;
    
        :hover{
            color: blue;
            text-decoration: none;
        }
    }
`

const StyledNavigationLinkActive = styled(NavigationLinkBase)`
    a{
        font-size: 150%;
        text-decoration: underline;
        color: blue;
    }
`

const NavigationLink = (props) => {
    if(props.page == props.curPage){
        console.log(props.page + " == " + props.curPage);
        return(
            <StyledNavigationLinkActive {...props}/>
        );
    }else{
        console.log(props.page + " != " + props.curPage);
        return(
            <StyledNavigationLink {...props}/>
        );
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