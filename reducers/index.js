import {combineReducers} from 'redux';

import {cvlistReducer, pagemarkReducer, curpagemarkReducer} from './uiReducer';

const reducers = combineReducers(
    {
        cvlist: cvlistReducer,
        pagemark: pagemarkReducer,
        curpagemark: curpagemarkReducer
    }
);

export default reducers;