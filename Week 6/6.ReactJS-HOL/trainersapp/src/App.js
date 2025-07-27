import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TrainersList from './components/TrainersList';
import TrainerDetails from './components/TrainerDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Academy Trainers App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/trainers/:id" element={<TrainerDetails />} />
      </Routes>
    </div>
  );
}

export default App;