import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

function Pagination({
  hasNextPage,
  hasPrevPage,
  limit,
  nextPage,
  page,
  prevPage,
  totalPages,
  totalDocs,
  setPage,
}) {
  const handleClick = (e, val) => {
    e.preventDefault();
    setPage(val);
  };

  return (
    <div className="pagination">
      <Link
        onClick={(e) => handleClick(e, page - 1)}
        className={!hasPrevPage ? 'disabled' : ''}
        to="#"
      >
        &laquo;
      </Link>

      {Array.from({ length: totalPages }).map((item, index) => {
        let pageNum = index + 1;

        return (
          <Link
            onClick={(e) => handleClick(e, index + 1)}
            className={page === index + 1 ? 'active' : ''}
            key={index}
            to={`/`}
          >
            {pageNum}
          </Link>
        );
      })}

      <Link
        onClick={(e) => handleClick(e, page + 1)}
        className={!hasNextPage ? 'disabled' : ''}
        to="#"
      >
        &raquo;
      </Link>
    </div>
  );
}

export default Pagination;
