import {configureStore} from '@reduxjs/toolkit';
import studentReducer from './studentsSlice';

const store=configureStore({
    reducer:{
        students:studentReducer,
    },
});

export default store;