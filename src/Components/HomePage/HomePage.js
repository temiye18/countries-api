import React, { useEffect, useState, useRef } from "react";
import useAsync from "../../hooks/use-async";
import usePaginate from "../../hooks/usePaginate";
import Container from "../UI/Container.styled";
import Loading from "../UI/Loading";
import Countries from "./Countries";
import FilterSearch from "./FilterSearch";
import Pagination from "../Pagination/Pagination";
import "./HomePage.css";

const url = "https://restcountries.com/v3.1";

const HomePage = () => {
  const [region, setRegion] = useState("all");

  // const [isError, setIsError] = useState(false);

  const pageRef = useRef(null);
  const scrollPageToView = () => {
    pageRef.current.scrollIntoView();
  };

  const { isLoading, countries, fetchCountries } = useAsync();

  const {
    currentPage,
    postPerPage,
    maxPageLimit,
    minPageLimit,
    handlePageChange,
    handlePrev,
    handleNext,
    resetPage,
  } = usePaginate(20, 5, scrollPageToView);

  const handleFilter = (filteredRegion) => {
    resetPage();
    fetchCountries(url);
    setRegion(filteredRegion);
  };

  const handleSearch = async (searchValue) => {
    // setRegion("all");
    let regionEndpoint = `name/${searchValue}`;

    if (searchValue === "") {
      regionEndpoint = "all";
    }

    fetchCountries(url, regionEndpoint);
  };

  useEffect(() => {
    fetchCountries(url);
  }, [fetchCountries]);

  // console.log(countries);

  const filtered = countries.filter(
    (country) => country.region === region || region === "all"
  );

  // console.log(filtered);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;

  const allCountries = (
    <section className={"countries"} ref={pageRef}>
      {filtered.slice(indexOfFirstItem, indexOfLastItem).map((country) => (
        <Countries key={country.name.common} {...country} />
      ))}

      {filtered.length === 0 && (
        <h2 className="error-message">
          Ooops!! Country can't be found in this region. Please select "All" to
          search for countries from all regions
        </h2>
      )}
    </section>
  );

  return (
    <section className="main-page">
      <Container>
        <FilterSearch
          region={region}
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
        {isLoading ? <Loading /> : allCountries}
        {filtered.length > 0 && (
          <Pagination
            handlePageChange={handlePageChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentPage={currentPage}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            countriesLength={filtered.length}
            postPerPage={postPerPage}
          />
        )}
      </Container>
    </section>
  );
};

export default HomePage;
