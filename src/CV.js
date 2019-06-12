import React from 'react';
import CVProfileContainer from './components/CVProfileContainer';
import CVProfileList from './components/CVProfileList';
import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';
import {Grid, Box, Hidden} from '@material-ui/core';
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
                <Grid item container direction="column" spacing={5} md={9} lg={10} xl={11}>
                    <Grid 
                        container 
                        className={style.root} 
                        direction="column" 
                        spacing={2} 
                        alignItems="center"
                    >
                        <Grid item container xs direction="column" justify="center">
                            <Box padding={5} height={400} display="flex" justifyContent="center">
                                <img className={style.img} src="https://via.placeholder.com/150"/>
                            </Box>
                        </Grid>
                        <Grid item container md={12} direction="row" spacing={5}>
                            <CVProfileContainer title="Test">
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                            </CVProfileContainer>
                            <CVProfileContainer title="Test">
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                            </CVProfileContainer>
                            <CVProfileContainer title="Test">
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                            </CVProfileContainer>
                            <CVProfileContainer title="Test">
                                <CVProfileList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                            </CVProfileContainer>
                        </Grid>
                    </Grid>
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