import React from 'react';
import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';
import CVProfile from './components/CVProfile';
import CVProfileHeader from './components/CVProfileHeader';
import CVProfileContent from './components/CVProfileContent';
import {Grid} from '@material-ui/core';

function CV(){
    // col in left contain = Profile -> Main CV Content
    // col in right contain = scroll spy and bookmark(for pc only)
    return (
        <Grid container>
            <Grid item container direction="column" md={9} lg={10} xl={11}>
                <CVProfile>
                    <CVProfileHeader/>
                    <CVProfileContent/>
                </CVProfile>
                <CVMainContainer title="Work History" index={0} color='#53575C'>
                    <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                    <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                    <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                </CVMainContainer>
                <CVMainContainer title="Education History" index={1} color='#E4E2CD'>
                    <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                    <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                    <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                </CVMainContainer>
                <CVMainSkillContainer title="Skill" index={2} color='#E7A82C'>
                    <CVMainSkillList title="Title" cur={1} max={5}/>
                    <CVMainSkillList title="Title" cur={3} max={5}/>
                    <CVMainSkillList title="Title" cur={5} max={5}/>
                    <CVMainSkillList title="Title" cur={3} max={5}/>
                </CVMainSkillContainer>
            </Grid>
        </Grid>
    );
}

export default CV;