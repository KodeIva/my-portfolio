import React from 'react'
import './App.css';
import Home from  './components/Home'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';


function App() {
  return (
    <>
  <Router>
   <Header />
    <Routes basename='my-portfolio'>
       <Route path='/my-portfolio/' element={<Home />} />
       <Route path='/my-portfolio/about' element={<About/>} />
       <Route path='/my-portfolio/projects' element={<Projects/>} />
        <Route path='/my-portfolio/contact' element={<Contact />} />
     </Routes>
    <Footer />
  </Router>
  </>
  );
}

export default App;
