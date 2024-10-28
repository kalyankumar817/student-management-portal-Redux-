import { createSlice } from '@reduxjs/toolkit';
import studentsData from '../data/StudentsData';

const initialState = {
    students: studentsData,
};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addstudent: (state, action) => {
            state.students.push(action.payload);
        },
        viewstudent: (state, action) => {
            return state.students.find(student => student.id === action.payload);
        },
        editstudent: (state, action) => {
            const { id, updateData } = action.payload;
            const index = state.students.findIndex(student => student.id === id);
            if (index !== -1) {
                state.students[index] = { ...state.students[index], ...updateData };
            }
        },
        deletestudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
        },
    },
});

// Export actions to be used in components
export const { addstudent, viewstudent, editstudent, deletestudent } = studentsSlice.actions;

// Export reducer to be used in the store
export default studentsSlice.reducer;
