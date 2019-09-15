import Axios from '../Axios';

export const FetchPortfolio = () => async dispatch => {
    try{
        const data = await Axios.get('Portfolio');
        console.log(data.data);
        dispatch({
            type: "FETCH_PORTFOLIO", 
            portfolio: data.data.map(value => value.data)
        });
    }catch(err){
        console.log(err);
    }
};

export const FetchCV = () => async dispatch => {
    try{
        const data = await Axios.get('CV');
        console.log(data.data);
        dispatch({
            type: "FETCH_CV", 
            cv: data.data[0].data
        });
    }catch(err){
        console.log(err);
    }
};

export const FetchEducation = () => async dispatch => {
    try{
        const data = await Axios.get('Education');
        console.log(data.data);
        dispatch({
            type: "FETCH_EDUCATION", 
            education: data.data.map(value => value.data)
        });
    }catch(err){
        console.log(err);
    }
};

export const FetchWork = () => async dispatch => {
    try{
        const data = await Axios.get('Work');
        console.log(data.data);
        dispatch({
            type: "FETCH_WORK", 
            work: data.data.map(value => value.data)
        });
    }catch(err){
        console.log(err);
    }
};

export const FetchSkill = () => async dispatch => {
    try{
        const data = await Axios.get('Skill');
        console.log(data.data);
        dispatch({
            type: "FETCH_SKILL", 
            skill: data.data.map(value => value.data)
        });
    }catch(err){
        console.log(err);
    }
};