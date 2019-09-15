import {createReducer} from './helpers';
import {produce} from 'immer';

// page reducer
const setCurrentPage = (state, action) => action.page;

// cvlist reducer
const showCvList = (state, action) => produce(state, draft=>{
    const {index} = action;
    draft[index] = true;
});

const hideCvList = (state, action) => produce(state, draft=>{
    const {index} = action;
    draft[index] = false;
});

// pagemark reducer
const initPageMark = (state, action) => produce(state, draft=>{
    const {title, ref} = action;
    draft[title] = ref;
});

// curpagemark reducer
const setCurrentPageMark = (state, action) => produce(state, draft=>{
    const {title, moving} = action;
    draft.title = title;
    draft.moving = moving;
});

// reducers
export const pageReducer = createReducer('', {
    SET_CURRENT_PAGE: setCurrentPage
});

export const cvlistReducer = createReducer({}, {
    SHOW_CV_LIST: showCvList,
    HIDE_CV_LIST: hideCvList
});

export const pagemarkReducer = createReducer({}, {
    INIT_PAGE_MARK: initPageMark
});

export const curpagemarkReducer = createReducer({}, {
    SET_CURRENT_PAGE_MARK: setCurrentPageMark
});