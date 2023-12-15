import './App.css'
import Navbar from "./Components/Navbar"
import MySkills from "./Components/Skills/index.jsX"
import Education from "./Components/Education"
import Contact from './Components/Contact/index.jsx'
import Experience from './Components/Experience/index.jsx'
import HeroSection from "./Components/HeroSection/index.jsx"
import Projects from './Components/Projects/index.jsx'
import Footer from './Components/Footer/index.jsx'

import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <ThemeProvider theme = {darkTheme}>
        <Router>
          <Navbar/>
          <Body>
            <HeroSection />
            <Wrapper>
              <MySkills/>
              <Experience/>
            </Wrapper>

            <Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal}/>
              <Education/>              
            </Wrapper>

            <Wrapper>
              <Contact/>
            </Wrapper>

            <Footer />
            {/* {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            } */}
          </Body>

        </Router>           
      </ThemeProvider>   
    </>
  )
}

export default App ;
