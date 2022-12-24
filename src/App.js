
import React from 'react';
import './App.css';
import Header from './components/header/header'
import Nav from './components/navbar/navbar'
import About from './components/about/about'
import Exprience from './components/exprience/exprience'
import Portfolio from './components/portfolio/portfolio'
import Projects from './components/projects/Projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exprience />
      <Portfolio />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
