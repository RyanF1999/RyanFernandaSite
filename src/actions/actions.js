// Types
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SHOW_PREVIEW = 'SHOW_PREVIEW';
export const HIDE_PREVIEW = 'HIDE_PREVIEW';
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

// if null mean no preview
/*
    Data for SetPreview:
    title, desc, imgdest
*/
export function ShowPreview(data){
    return {type: SHOW_PREVIEW, preview: data}
}

export function HidePreview(){
    return {type: HIDE_PREVIEW}
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