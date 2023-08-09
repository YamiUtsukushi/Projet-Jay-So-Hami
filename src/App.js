import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './05-toDoList';
import Article from './06-nav-link/article'; 
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './06-nav-link/header';
import Countertime from './01-state/counter';
import Cycle from './07-class/cycle';
import Parent from './07-class/parent';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          
          <Header></Header>

          {/* Routes */}
          <Routes>

            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/countertime" element={<Countertime />} />
            <Route path="/cycle" element={<Cycle />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/article/:id" element={<Article />} />

          </Routes>
        </header>
      </div>
    </Router>
  );
}


export default App;
