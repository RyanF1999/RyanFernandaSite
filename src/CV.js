import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import {useSelector} from 'react-redux';

import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';
import CVProfile from './components/CVProfile';
import CVProfileHeader from './components/CVProfileHeader';
import CVProfileContent from './components/CVProfileContent';

function CV(){
    const cv = useSelector(state => state.database.cv);
    const education = useSelector(state => state.database.education);
    const work = useSelector(state => state.database.work);
    const skill = useSelector(state => state.database.skill);

    // col in left contain = Profile -> Main CV Content
    // col in right contain = scroll spy and bookmark(for pc only)
    return (
        <Grid container>
            <Grid item container direction="column" md={9} lg={10} xl={11}>
                <CVProfile>
                    <CVProfileHeader img={cv.profile_img} desc={cv.description}/>
                    <CVProfileContent data={cv.informations}/>
                </CVProfile>
                <CVMainContainer title="Work History" index={0} color='#53575C'>
                    {
                        work.map(({title, subtitle, time}) => <CVMainList 
                                key={title}
                                title={title}
                                subtitle={subtitle || ""}
                                time={time}
                            />
                        )
                    }
                </CVMainContainer>
                <CVMainContainer title="Education History" index={1} color='#E4E2CD'>
                    {
                        education.map(({title, subtitle, time}) => <CVMainList 
                                key={title}        
                                title={title}
                                subtitle={subtitle || ""}
                                time={time}
                            />
                        )
                    }
                </CVMainContainer>
                <CVMainSkillContainer title="Skill" index={2} color='#E7A82C'>
                    {
                        skill.map(({title, rating}) => <CVMainSkillList
                                key={title}
                                title={title}
                                cur={rating}
                                max={5}
                            />
                        )
                    }
                </CVMainSkillContainer>
            </Grid>
        </Grid>
    );
}

export default CV;