// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './css/app.css';
// import Navbar from './components/Navbar';
// import Service from './components/Service';
// import Registerfir from './components/Registerfir';
// import ComplaintPage from './components/ComplaintPage';
// import Status from './components/Status';
// import Latestupdate from './components/Latestupdate';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Service />} />
//           <Route path="/register-fir" element={<Registerfir />} />
//           <Route path="/complaints" element={<ComplaintPage />} />
//           <Route path="/status/:id" element={<Status />} />
//           <Route path="/latestupdate" element={<Latestupdate />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/app.css';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Registerfir from './components/Registerfir';
import ComplaintPage from './components/ComplaintPage';
import Status from './components/Status';
import Latestupdate from './components/Latestupdate';
import LoginForm from './components/LoginForm'; // Import LoginForm component
import SignupForm from './components/SignupForm'; // Import SignupForm component
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [signupFormData, setSignupFormData] = useState({ email: '', password: '', name: '', aadhaarNumber: '', phoneNumber: '' });

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const handleSignup = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleLoginChange = (key) => (e) => {
    setLoginFormData({ ...loginFormData, [key]: e.target.value });
  };

  const handleSignupChange = (key) => (e) => {
    setSignupFormData({ ...signupFormData, [key]: e.target.value });
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/register-fir" element={<Registerfir />} />
          <Route path="/complaints" element={<ComplaintPage />} />
          <Route path="/status/:id" element={<Status />} />
          <Route path="/latestupdate" element={<Latestupdate />} />
          <Route
            path="/login"
            element={
              <LoginForm
                handleSubmit={handleLogin}
                handleChange={handleLoginChange}
                formData={loginFormData}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignupForm
                handleSubmit={handleSignup}
                handleChange={handleSignupChange}
                formData={signupFormData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


