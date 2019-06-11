// Types
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SHOW_CV_LIST = 'SHOW_CV_LIST';
export const HIDE_CV_LIST = 'HIDE_CV_LIST';

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