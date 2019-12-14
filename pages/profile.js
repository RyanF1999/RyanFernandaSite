import React, { useEffect } from 'react';
import Head from 'next/head';

import Grid from '@material-ui/core/Grid';
import useTheme from '@material-ui/core/styles/useTheme';

import CVMainContainer from '../components/CVMainContainer';
import CVMainList from '../components/CVMainList';
import CVMainSkillContainer from '../components/CVMainSkillContainer';
import CVMainSkillList from '../components/CVMainSkillList';
import CVProfile from '../components/CVProfile';
import CVProfileHeader from '../components/CVProfileHeader';
import CVProfileContent from '../components/CVProfileContent';

import Axios from '../utils/Axios';
import { initGA, logPageView } from '../utils/GoogleTag';

function Profile({
  cv = {
    profile_img: "",
    description: "",
    informations: []
  },
  education = [],
  work = [],
  skill = []
}) {
  
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  const theme = useTheme();

  // col in left contain = Profile -> Main CV Content
  // col in right contain = scroll spy and bookmark(for pc only)
  return (
    <Grid container>
      <Head>
        <title>Ryan Fernanda | Profile</title>
        <meta name="description" content="Ryan Fernanda's profile" />
        <meta name="keywords" content="Ryan Fernanda, RyanF42, StarfallProduction, Starfall Production, React, Angular, Electron, React Native, Web Development, Web developer, Mobile Development, Mobile developer, ElectronJS Developer, starfallproduction42, Freelancer" />
      </Head>

      <Grid item container direction="column" md={9} lg={10} xl={11}>
        <CVProfile>
          <CVProfileHeader img={cv.profile_img} desc={cv.description} />
          <CVProfileContent data={cv.informations} />
        </CVProfile>
        <CVMainContainer title="Work History" index={0} color={theme.palette.work}>
          {
            work.map(({ title, subtitle, time }) => <CVMainList
              key={title}
              title={title}
              subtitle={subtitle || ""}
              time={time}
            />
            )
          }
        </CVMainContainer>
        <CVMainContainer title="Education History" index={1} color={theme.palette.education}>
          {
            education.map(({ title, subtitle, time }) => <CVMainList
              key={title}
              title={title}
              subtitle={subtitle || ""}
              time={time}
            />
            )
          }
        </CVMainContainer>
        <CVMainSkillContainer title="Skill" index={2} color={theme.palette.skill}>
          {
            skill.map(({ title, rating }) => <CVMainSkillList
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

Profile.getInitialProps = async (ctx) => {
  // prefetch cv, education, work, skill
  let cv, education, work, skill;

  try {
    const [cvData, educationData, workData, skillData] = await Promise.all([
      Axios.get('CV'),
      Axios.get('Education'),
      Axios.get('Work'),
      Axios.get('Skill', {
        params: {
          orderBy: "rating: desc, title: asc"
        }
      })
    ]);

    cv = cvData.data[0].data;
    education = educationData.data.map(value => value.data);
    work = workData.data.map(value => value.data);
    skill = skillData.data.map(value => value.data);
  } catch (err) {
    console.log(err);
  }

  return { cv, education, work, skill };
};

export default Profile;