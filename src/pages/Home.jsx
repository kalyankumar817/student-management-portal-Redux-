import React from 'react';
import "./Home.css";
import RegisterStudent from './RegisterStudent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    //handling button to open RegisterStudent page
    const handleRegister = () => {
        navigate('/registerstudent'); // Navigate to RegisterStudent page
    };
    // Function to handle button click for viewing students
    const handleViewStudents = () => {
    navigate('/studentslist'); // Navigate to StudentsList page
    };
  return (
    <div className='home-container'>
      <h2>Welcome to the Home Page(Student Mangement System)</h2>
      <button type='button' className='reg-btn' onClick={handleRegister}>Register New Student</button>
      <button type='button' className='view-btn' onClick={handleViewStudents}>View Students List</button>
    </div>
  )
}

export default Home
