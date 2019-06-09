import {combineReducers} from 'redux';
import { SET_CURRENT_PAGE, HIDE_PREVIEW, SHOW_PREVIEW, SHOW_CV_LIST, HIDE_CV_LIST } from '../actions/actions';

function currentPage(state = '', action){
    switch(action.type){
        case SET_CURRENT_PAGE:
            state = action.page;
        break;
    }
    return state;
}

function setPreview(state = null, action){
    switch(action.type){
        case SHOW_PREVIEW:
            state = action.preview;
        break;
        case HIDE_PREVIEW:
            state = null;
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
    }
    return tempstate;
}

const reducers = combineReducers(
    {
        page: currentPage,
        preview: setPreview,
        cvlist: setCvList
    }
);

export default reducers;