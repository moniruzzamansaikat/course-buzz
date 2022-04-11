import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Filter({ options }) {
  const [, setSearchParam] = useSearchParams();
  const [filterKey, setFilterKey] = useState('all');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilterKey(e.target.value);
    setSearchParam({ key: e.target.value });
  };

  const handleClick = () => {
    if (!filterKey.length > 0) return alert('Please enter a search term');
    if (filterKey === 'all') return alert('Please select a category');
    navigate(`/community/ask?key=${filterKey}`);
  };

  return (
    <div className="filter">
      <select name="cateogry" id="category" onChange={handleChange}>
        <option value={'all'}>All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}{' '}
          </option>
        ))}
      </select>
      <button onClick={handleClick} className="btn btn-primary">
        Ask a question
      </button>
    </div>
  );
}

export default Filter;
