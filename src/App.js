// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/app.css';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Registerfir from './components/Registerfir';
import ComplaintPage from './components/ComplaintPage';
import Status from './components/Status';
import Latestupdate from './components/Latestupdate';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/register-fir" element={<Registerfir />} />
          <Route path="/complaints" element={<ComplaintPage />} />
          <Route path="/status/:id" element={<Status />} />
          <Route path="/latestupdate" element={<Latestupdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;