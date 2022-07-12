import React from "react";
import classes from "./FilterSearch.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const FilterSearch = (props) => {
  const setFilter = (event) => {
    props.onFilter(event.target.value);
  };

  const handleSearchValue = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className={classes.filter__actions}>
      <div className={classes.search}>
        <AiOutlineSearch className={classes.search__icon} />

        <input
          type="text"
          name="search"
          placeholder="Search for a country"
          onChange={handleSearchValue}
        />
      </div>
      <div className={classes.select__box}>
        <select
          className={classes.select}
          name="filter"
          id="filter"
          onChange={setFilter}
        >
          <option>Filter by region</option>
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
