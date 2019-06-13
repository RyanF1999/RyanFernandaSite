// Types
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SHOW_CV_LIST = 'SHOW_CV_LIST';
export const HIDE_CV_LIST = 'HIDE_CV_LIST';
export const INIT_PAGE_MARK = 'INIT_PAGE_MARK';
export const SET_CURRENT_PAGE_MARK = 'SET_CURRENT_PAGE_MARK';

export const CurrentPage = {
    PORTFOLIO: 'PORTFOLIO',
    CV: 'CV'
};

// Action Creator
export function SetCurrentPage(page){
    return {type: SET_CURRENT_PAGE, page: page}
}

// action for main cv list
/*
    data: CvList Container key
*/
export function ShowCvList(index){
    return {type: SHOW_CV_LIST, index: index}
}

export function HideCvList(index){
    return {type: HIDE_CV_LIST, index: index}
}

// action for register data of title and ref for PageMark in CV
export function InitPageMark(title, ref){
    return {type: INIT_PAGE_MARK, title: title, ref: ref}
}

// action for storing current page mark
export function SetCurrentPageMark(title, moving){
    return {type: SET_CURRENT_PAGE_MARK, title: title, moving: moving}
}