import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../stores/employeeSlice';
import authReducer from '../stores/authSlice';

export default configureStore({
  reducer: {
    employees: employeeReducer,
    // auth: authReducer,
  },
});