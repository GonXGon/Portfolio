// src/App.js
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header title="My Portfolio" />
      <main className="my-5">
        <section id="about" className="mb-5">
          <About />
        </section>
        <section id="projects" className="mb-5">
          <Projects />
        </section>
        <section id="skills" className="mb-5">
          <Skills />
        </section>
        <section id="education" className="mb-5">
          <Education />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
