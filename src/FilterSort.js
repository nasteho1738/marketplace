import React from 'react';

function FilterSort({ filterTitle, setFilterTitle, sortBy, setSortBy }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="filterTitle">Filter by Title:</label>
        <input
          type="text"
          className="form-control"
          id="filterTitle"
          placeholder="Enter title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sortSelect">Sort by:</label>
        <select
          className="form-control"
          id="sortSelect"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>
    </>
  );
}

export default FilterSort;

