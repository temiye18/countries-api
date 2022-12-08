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
          <option value="all">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSearch;
