import React from 'react';
import {useDispatch} from 'react-redux';
import {addstudent} from '../redux/studentsSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./RegisterStudent.css";


const RegisterStudent = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate(); // Initializing navigate hook


    //storing all input data in one usestate case
    const[formData,setFormData]=useState({
        name:'', email:'', age:'', class:'', address:'', phonenumber:'',  
    });

    //handling input data
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    //handling form submission data
    const handleSubmit=(e)=>{
        e.preventDefault();
        // Validate required fields before dispatching
        if (!formData.name || !formData.email || !formData.age || !formData.class || !formData.phonenumber) {
            alert("Please fill in all required fields.");
            return;
        }
        // Dispatch addStudent action with form data
        dispatch(addstudent({ id: Date.now(), ...formData }));

         // Redirect to students list page
         navigate('/studentslist');
    };

  return (
    <div className='reg-form'>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' placeholder='Enter Your Name:' value={formData.name} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
            <label  htmlFor='email'>Email:</label>
            <input id='email' placeholder='Enter Your Email:' value={formData.email} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
            <label  htmlFor='age'>Age:</label>
            <input id='age' placeholder='Enter Your Age:' value={formData.age} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
            <label  htmlFor='class'>Class:</label>
            <input id='class' placeholder='Enter Your Class:' value={formData.class} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
            <label  htmlFor='address'>Address:</label>
            <input id='address' placeholder='Enter Your Address:' value={formData.address} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
            <label  htmlFor='phonenumber'>Phone Number:</label>
            <input id='phonenumber' placeholder='Enter Your Phone Number:' value={formData.phonenumber} onChange={handleChange} required/>
        </div>
        <br/>
        <div>
        <button type='submit' className='reg-btn'>Save to students list</button>
        </div>
      </form>
    </div>
  )
};
export default RegisterStudent
