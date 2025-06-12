import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, setSearchTerm, setSortBy, setPage } from '../../stores/employeeSlice';
import './EmployeeList.module.css';



function EmployeeList() {
  const dispatch = useDispatch();
  const { users, loading, error, searchTerm, sortBy, currentPage, totalPages } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, search: searchTerm, sort: sortBy }));
  }, [dispatch, currentPage, searchTerm, sortBy]);

  const handleDelete = (id) => dispatch(deleteUser(id));
  const handleSearch = (e) => dispatch(setSearchTerm(e.target.value));
  const handleSort = (e) => dispatch(setSortBy(e.target.value));
  const handlePageChange = (page) => dispatch(setPage(page));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="employee-list">
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
      <select value={sortBy} onChange={handleSort}>
        <option value="email">Sort by Email</option>
      </select>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default React.memo(EmployeeList);