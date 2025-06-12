import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';
import NotFound from '../pages/NotFound';
import Pagination from '../components/Pagination/Pagination';

function ProtectedRoutes() {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/add-employee" element={<EmployeeForm />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ProtectedRoutes;