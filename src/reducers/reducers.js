import {combineReducers} from 'redux';
import * as actions from '../actions/actions';

function currentPage(state = '', action){
    switch(action.type){
        case actions.SET_CURRENT_PAGE:
            state = action.page;
        break;
    }
    return state;
}

const reducers = combineReducers(
    {
        page: currentPage
    }
);

export default reducers;