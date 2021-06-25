import React from 'react';
import './App.scss';
import { Header, Home, About, PersonalSkills, Process, Projects, WorkProcess, Contact, Footer } 
from './components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home />
      <About />
      <div className="personal_skills">
          <div className="languages"><span>Languages</span>
              <p>HTML/CSS</p>
              <PersonalSkills percent="75"></PersonalSkills>
              <p>JS</p>
              <PersonalSkills percent="30"></PersonalSkills>
              <p>PHP</p>
              <PersonalSkills percent="25"></PersonalSkills>
           </div>
           <div className="other"><span>Other skills</span>
              <p>React JS</p>
              <PersonalSkills percent="20"></PersonalSkills>
              <p>JQuery</p>
              <PersonalSkills percent="14"></PersonalSkills>
              <p>Photoshop</p>
              <PersonalSkills percent="55"></PersonalSkills>
          </div>
      </div>
      <Process />
      <Projects />
      <WorkProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
