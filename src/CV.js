import React from 'react';
import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';
import CVProfile from './components/CVProfile';
import CVProfileHeader from './components/CVProfileHeader';
import CVProfileContent from './components/CVProfileContent';
import {Grid, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
    root: {
        paddingTop: 50,
        paddingBottom: 50
    },
    img: {
        height: '100%',
        width: 'auto',
        borderRadius: '50%',
        border: '1.5px black dashed',
    }
});

function CV(){
    const style = useStyle();

    // col in left contain = Profile -> Main CV Content
    // col in right contain = scroll spy and bookmark(for pc only)
    return (
        <React.Fragment>
            <Grid container>
                <Grid item container direction="column" md={9} lg={10} xl={11}>
                    <CVProfile>
                        <CVProfileHeader/>
                        <CVProfileContent/>
                    </CVProfile>
                    <CVMainContainer title="Test" index={0} color='#53575C'>
                        <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                        <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                        <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                    </CVMainContainer>
                    <CVMainContainer title="Test" index={1} color='#E4E2CD'>
                        <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                        <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                        <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                    </CVMainContainer>
                    <CVMainSkillContainer title="Test" index={2} color='#E7A82C'>
                        <CVMainSkillList title="Title" cur={1} max={5}/>
                        <CVMainSkillList title="Title" cur={3} max={5}/>
                        <CVMainSkillList title="Title" cur={5} max={5}/>
                        <CVMainSkillList title="Title" cur={3} max={5}/>
                    </CVMainSkillContainer>
                </Grid>
                <Hidden mdUp>
                    <Grid item container direction="column" xs>
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>
    );
}

export default CV;