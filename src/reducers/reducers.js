import {combineReducers} from 'redux';
import { SET_CURRENT_PAGE, SHOW_CV_LIST, HIDE_CV_LIST } from '../actions/actions';

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

const reducers = combineReducers(
    {
        page: currentPage,
        cvlist: setCvList
    }
);

export default reducers;