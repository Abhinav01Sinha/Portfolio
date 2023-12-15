import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './projectStyle'
import ProjectCard from './projectCard'
import { projects } from '../../data/constants'
import { Description } from '@mui/icons-material'

const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    return (
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. Here are some of my projects.
          </Desc>

          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active='true' value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web' ?
              <ToggleButton active='true' value="web" onClick={() => setToggle('web')}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web" onClick={() => setToggle('web')}>WEB APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active='true' value="aiml" onClick={() => setToggle('aiml')}>AI-ML</ToggleButton>
              :
              <ToggleButton value="aiml" onClick={() => setToggle('aiml')}>AI-ML</ToggleButton>
            }
          </ToggleButtonGroup>

          <CardContainer>
            {toggle === 'all' && projects
              .map((project , index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project , index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    )
  }
  
export default Projects ;
