// Types
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const CurrentPage = {
    PORTFOLIO: 'PORTFOLIO',
    CV: 'CV'
};

// Action Creator
export const SetCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, page: page}
}