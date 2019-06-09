import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import CVSideContainer from './components/CVSideContainer';
import CVSideList from './components/CVSideList';
import CVMainContainer from './components/CVMainContainer';
import CVMainList from './components/CVMainList';
import CVMainSkillContainer from './components/CVMainSkillContainer';
import CVMainSkillList from './components/CVMainSkillList';

const StyledCV = styled(Row)`
    padding-bottom: 50px;
`

const StyledSideCV = styled(Col)`
    background-color: pink;
`

const StyledSideImg = styled(Row)`
    img{
        height: auto;
        width: 100%;
        border-radius: 50%;
        border: 1.5px black dashed;
    }
`

function CV(){
    return (
        <StyledCV className="justify-content-center">
            <Col xs="12" md="8">
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
            </Col>
            <StyledSideCV>
                <StyledSideImg className="justify-content-center py-5">
                    <Col xs="12" sm="12" md="12" lg="10" xg="10">
                        <img className="d-block mx-auto p-1" src="https://via.placeholder.com/150"/>
                    </Col>
                </StyledSideImg>
                <CVSideContainer title="Test">
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                </CVSideContainer>
                <CVSideContainer title="Test">
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                    <CVSideList title="Title" desc="desc" icon="https://via.placeholder.com/150"/>
                </CVSideContainer>
            </StyledSideCV>
        </StyledCV>
    );
}

export default CV;