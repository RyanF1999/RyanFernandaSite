import {combineReducers} from 'redux';
import { SET_CURRENT_PAGE, SHOW_CV_LIST, HIDE_CV_LIST, INIT_PAGE_MARK, SET_CURRENT_PAGE_MARK} from '../actions/actions';

function currentPage(state = '', action){
    switch(action.type){
        case SET_CURRENT_PAGE:
            state = action.page;
        break;
        default:
        break;
    }
    return state;
}

function setCvList(state = new Map(), action){
    let tempstate = state;
    switch(action.type){
        case SHOW_CV_LIST:
            tempstate.set(action.index, true);
        break;
        case HIDE_CV_LIST:
            tempstate.set(action.index, false);
        break;
        default:
        break;
    }
    return tempstate;
}

function initPageMark(state = {}, action){
    let tempstate = state;
    switch(action.type){
        case INIT_PAGE_MARK:
            tempstate[action.title] = action.ref;
        break;
        default:
        break;
    }
    return tempstate;
}

function setCurrentPageMark(state = {}, action){
    switch(action.type){
        case SET_CURRENT_PAGE_MARK:
            state = {
                title: action.title, 
                moving: action.moving
            };
        break;
        default:
        break;
    }
    return state;
}

const reducers = combineReducers(
    {
        page: currentPage,
        cvlist: setCvList,
        pagemark: initPageMark,
        curpagemark: setCurrentPageMark
    }
);

export default reducers;