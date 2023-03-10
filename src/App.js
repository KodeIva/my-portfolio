import React from 'react'
import './App.css';
import Home from  './components/Home'
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ProjectGallery from './components/ProjectsGallery';
import Contact from './components/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    
  <BrowserRouter>
   <Header />
    <Routes basename='my-portfolio'>
       <Route path='/my-portfolio/' element={<Home />} />
       <Route path='/my-portfolio/about' element={<About/>} />
       <Route path='/my-portfolio/project' element={<Project/>} />
       <Route path='/my-portfolio/projectGallery' element={<ProjectGallery />} />
        <Route path='/my-portfolio/contact' element={<Contact />} />
     </Routes>
    
  </BrowserRouter>
  </>
  );
}

export default App;
