import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <>
        <Header title="My Portfolio" />
        <main className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/eduaction" element={<Education />} />
            <Route path="/experience" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;