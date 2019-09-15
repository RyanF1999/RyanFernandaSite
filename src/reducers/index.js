import combineReducers from 'redux/src/combineReducers';

import {pageReducer, cvlistReducer, pagemarkReducer, curpagemarkReducer} from './uiReducer';
import {databaseReducer} from './databaseReducer';

const reducers = combineReducers(
    {
        page: pageReducer,
        cvlist: cvlistReducer,
        pagemark: pagemarkReducer,
        curpagemark: curpagemarkReducer,
        database: databaseReducer
    }
);

export default reducers;