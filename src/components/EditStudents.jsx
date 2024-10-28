import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editstudent } from '../redux/studentsSlice';
import "./EditStudents.css";

const EditStudents = () => {
  const { id } = useParams(); // Get student ID from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the specific student by ID in the Redux store
  const student = useSelector((state) =>
    state.students.students.find((student) => student.id === Number(id))
  );

  // Set up initial form state with student data or an empty object if not found
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phonenumber: ''
  });

  // Populate formData with the student’s details when the component mounts
  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  // Handle input changes to update the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to save the edited data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the editstudent action with ID and updated data
    dispatch(editstudent({ id: Number(id), updateData: formData }));
    // Navigate back to the students list page after editing
    navigate('/studentslist');
  };

  return (
    <div>
      <h2 style={{textAlign:'center', color:'blue'}}>Edit Student</h2>
      <div className='update-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              name='name' // Added name attribute
              placeholder='Enter Your Name:'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              name='email' // Added name attribute
              type='email' // Set type to email for validation
              placeholder='Enter Your Email:'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='age'>Age:</label>
            <input
              id='age'
              name='age' // Added name attribute
              type='number' // Set type to number for age
              placeholder='Enter Your Age:'
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='class'>Class:</label>
            <input
              id='class'
              name='class' // Added name attribute
              placeholder='Enter Your Class:'
              value={formData.class}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='address'>Address:</label>
            <input
              id='address'
              name='address' // Added name attribute
              placeholder='Enter Your Address:'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor='phonenumber'>Phone Number:</label>
            <input
              id='phonenumber'
              name='phonenumber' // Added name attribute
              placeholder='Enter Your Phone Number:'
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <button type='submit' className='btn'>Save to students list</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudents;
