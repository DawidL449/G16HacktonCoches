
import  React from "react";
import './App.css';
import {Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Section from './components/Section';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Inicio/>
        <Section />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
