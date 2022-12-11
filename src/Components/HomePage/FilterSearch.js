import React from "react";
import "./FilterSearch.css";
import { AiOutlineSearch } from "react-icons/ai";

const FilterSearch = (props) => {
  const setFilter = (event) => {
    props.onFilter(event.target.value);
  };

  const handleSearchValue = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="filter__actions">
      <div className="search">
        <AiOutlineSearch className="search__icon" />

        <input
          type="text"
          name="search"
          placeholder="Search for a country"
          onChange={handleSearchValue}
        />
      </div>
      <div className="select__box">
        <select
          className="select"
          name="filter"
          id="filter"
          onChange={setFilter}
        >
          <option value="all">Filter by region (All)</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSearch;
