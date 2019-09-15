import {createReducer} from './helpers';
import {produce} from 'immer';

const fetchPortfolio = (state, action) => produce(state, draft=>{
    const {portfolio} = action;
    draft.portfolio = portfolio;
});

const fetchCv = (state, action) => produce(state, draft=>{
    const {cv} = action;
    draft.cv = cv;
});

const fetchEducation = (state, action) => produce(state, draft=>{
    const {education} = action;
    draft.education = education;
});

const fetchWork = (state, action) => produce(state, draft=>{
    const {work} = action;
    draft.work = work;
});

const fetchSkill = (state, action) => produce(state, draft=>{
    const {skill} = action;
    draft.skill = skill;
});

// reducers
export const databaseReducer = createReducer(
    {
        portfolio: [],
        cv: {
            profile_img: "",
            description: "",
            informations: []
        },
        education: [],
        work: [],
        skill: []
    }, 
    {
        FETCH_PORTFOLIO: fetchPortfolio,
        FETCH_CV: fetchCv,
        FETCH_EDUCATION: fetchEducation,
        FETCH_WORK: fetchWork,
        FETCH_SKILL: fetchSkill
    }
);