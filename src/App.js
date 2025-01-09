import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Thanks from './components/Thanks';
import Theaters from './components/Theaters';
import MovieDetails from './components/MovieDetails';
import './App.css';
import SeatBooking from './components/SeatBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/theaters/:id" element={<Theaters />} />
        <Route path="/seatbooking" element={<SeatBooking />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>

  );
}

export default App;
