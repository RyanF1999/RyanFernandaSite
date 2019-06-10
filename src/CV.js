import React, { useEffect, useState } from 'react';
import CVSideContainer from './components/CVSideContainer';
import CVSideList from './components/CVSideList';
import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';
import {Grid, Drawer, useMediaQuery, Container, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useTheme} from '@material-ui/core/styles';
import ContentContainer from './components/ContentContainer';

const useStyle = makeStyles({
    drawer: {
        backgroundColor: 'pink'
    },
    drawerimg: {
        height: 'auto',
        width: '100%',
        borderRadius: '50%',
        border: '1.5px black dashed'
    },
    drawerWidth: {
        width: '30%'
    },
    drawerFullWidth: {
        width: '100%'
    }
});

function CvSideDrawer(props){
    const theme = useTheme();
    const style = useStyle();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, SetOpen] = useState(false);

    return(
        <Drawer 
            classes={{
                paper: isMobile ? style.drawerFullWidth : style.drawerWidth
            }}
            variant={isMobile ? "temporary" : "permanent"}
            anchor="right"
        >
            <Grid container direction="row" className={style.drawer} spacing={5}>
                <Grid item xs={12}>
                    <Box paddingLeft={5} paddingRight={5} paddingTop={5} paddingBottom={2}>
                        <img className={style.drawerimg} src="https://via.placeholder.com/150"/>
                    </Box>
                </Grid>
                <CVSideContainer title="Test">
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                </CVSideContainer>
                <CVSideContainer title="Test">
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                </CVSideContainer>
            </Grid>
        </Drawer>
    )
}

function CV(){
    return (
        <React.Fragment>
            <CvSideDrawer/>
            <ContentContainer>
                <Grid container>
                    <Grid item container direction="row" spacing={5} md={8}>
                        <CVMainContainer title="Test" index={0}>
                            <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                        </CVMainContainer>
                        <CVMainContainer title="Test" index={1}>
                            <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" time="2000 - Present"/>
                            <CVMainList title="Title" subtitle="Subtitle" desc="desc" time="2000 - Present"/>
                        </CVMainContainer>
                        <CVMainSkillContainer title="Test" index={2}>
                            <CVMainSkillList title="Title" cur={1} max={5}/>
                            <CVMainSkillList title="Title" cur={3} max={5}/>
                            <CVMainSkillList title="Title" cur={5} max={5}/>
                            <CVMainSkillList title="Title" cur={3} max={5}/>
                            <CVMainSkillList title="Title" cur={4} max={5}/>
                            <CVMainSkillList title="Title" cur={1} max={5}/>
                            <CVMainSkillList title="Title" cur={3} max={5}/>
                            <CVMainSkillList title="Title" cur={5} max={5}/>
                            <CVMainSkillList title="Title" cur={3} max={5}/>
                            <CVMainSkillList title="Title" cur={4} max={5}/>
                            <CVMainSkillList title="Title" cur={1} max={5}/>
                        </CVMainSkillContainer>
                    </Grid>
                </Grid>
            </ContentContainer>
        </React.Fragment>
    );
}

export default CV;