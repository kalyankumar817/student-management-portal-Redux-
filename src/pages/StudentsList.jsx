import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletestudent } from '../redux/studentsSlice'; // Import the removeStudent action

const StudentsList = () => {
  const dispatch = useDispatch();
  const studentslist = useSelector((state) => state.students.students);

  // Function to handle student removal
  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this student?");
    if (confirmRemove) {
      dispatch(deletestudent(id)); // Dispatch removeStudent action with the student id
    }
  };

  return (
    <div>
      <h2 style={{textAlign:'center', color:'navy'}}>Students List</h2>
      {studentslist.length > 0 ? (
        <ul>
          {studentslist.map((student) => (
            <li key={student.id}>
              <p>Name: {student.name}</p>
              <p>Age: {student.age}</p>
              <p>Class: {student.class}</p>
              <p>Address: {student.address}</p>
              <p>Phone Number: {student.phonenumber}</p>
              <p>Email:{student.email}</p>
              <p>
                <Link to={`/editstudent/${student.id}`}>
                  <button style={{ borderRadius: '5px', backgroundColor: 'green', color: 'white' }} type="button">EDIT</button>
                </Link>
                <button style={{ borderRadius: '5px', backgroundColor: 'red', color: 'white', marginLeft:'10px' }} type="button" onClick={() => handleRemove(student.id)}>REMOVE</button>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentsList;
