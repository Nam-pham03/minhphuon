import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../stores/employeeSlice';
import './EmployeeForm.module.css';

function EmployeeForm() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '' });
  const { loading, error } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Invalid email format');
      return;
    }
    dispatch(addUser(form));
    setForm({ first_name: '', last_name: '', email: '' });
  };

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Employee'}
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default React.memo(EmployeeForm);