import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import RegisterStudent from './pages/RegisterStudent';
import StudentsList from './pages/StudentsList';
import "./App.css";
import Home from './pages/Home';
import EditStudents from './components/EditStudents';


const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <Router>
      <nav className="navbar nav">
        <div className="brand">StudentMangementPortal</div>
        <button type='button' className="toggle-button" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'} {/* Show 'X' when open, '☰' when closed */}
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/home" className={({isActive})=>(isActive? "active":"")}>Home</NavLink></li>
          <li><NavLink to="/registerstudent" className={({isActive})=>(isActive? "active":"")}>Register Student</NavLink></li>
          <li><NavLink to="/studentslist" className={({isActive})=>(isActive? "active":"")}>Students List</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registerstudent" element={<RegisterStudent />} />
        <Route path="/studentslist" element={<StudentsList />} />
        <Route path="/editstudent/:id" element={<EditStudents />} />
      </Routes>
    </Router>
  );
};

export default App;
