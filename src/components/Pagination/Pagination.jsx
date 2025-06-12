import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../stores/employeeSlice';
import './Pagination.module.css';

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.employees);

  const handlePageChange = (page) => dispatch(setPage(page));

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default React.memo(Pagination);