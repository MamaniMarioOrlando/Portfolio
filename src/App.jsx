import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { About } from './components/About/About.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import './App.css';



function Skills() {
  return <h2>Habilidades</h2>;
}

function Contact() {
  return <h2>Contacto</h2>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;