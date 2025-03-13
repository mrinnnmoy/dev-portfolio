import React from 'react'
import "./App.css";
import Home from './components/Home';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechnicalWriting from './components/TechnicalWriting';

const App = () => {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <TechnicalWriting />
    </>
  )
};

export default App;