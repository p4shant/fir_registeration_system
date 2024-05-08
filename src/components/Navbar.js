// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/navbar.css';
// import logo from '../image/logo.png';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="navbar-logo-image" />
//         </Link>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/complaints">Complaint</Link>
//         </li>
//         <li>
//           <Link to="/latestupdate">Latest Update</Link>
//         </li>
//         <li>
//           <Link to="/feedback">Feedback</Link>
//         </li>
//       </ul>
//       <div className="navbar-login">
//         <Link to="/login">Login/Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../image/logo.png';

const Navbar = ({ isLoggedIn }) => {
  const renderAuthLink = () => {
    if (isLoggedIn) {
      return (
        <Link to="/logout" className="navbar-login">
          Logout
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="navbar-login">
          Login/Register
        </Link>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/complaints">Complaint</Link>
        </li>
        <li>
          <Link to="/latestupdate">Latest Update</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
      {renderAuthLink()}
    </nav>
  );
};

export default Navbar;
