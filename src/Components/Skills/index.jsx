import React from 'react'
import { skills } from '../../data/constants'
import {Container , Wrapper , Title , Desc , SkillsContainer , Skill , SkillTitle , SkillList , SkillItem , SkillImage } from "./skillStyle" ;

const MySkills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill , ind) => (
            <Skill key={ind}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList >
                {skill.skills.map((item , index) => (
                  <SkillItem key={index}>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default MySkills ;
