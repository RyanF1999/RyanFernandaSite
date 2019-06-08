import {combineReducers} from 'redux';
import { SET_CURRENT_PAGE, HIDE_PREVIEW, SHOW_PREVIEW } from '../actions/actions';

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

const reducers = combineReducers(
    {
        page: currentPage,
        preview: setPreview
    }
);

export default reducers;