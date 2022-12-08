import React, { useEffect, useState } from "react";
import useAsync from "../../hooks/use-async";
import Container from "../UI/Container.styled";
import Loading from "../UI/Loading";
import Countries from "./Countries";
import FilterSearch from "./FilterSearch";
import "./HomePage.css";

const url = "https://restcountries.com/v3.1";

const HomePage = () => {
  const [filtered, setFiltered] = useState([]);

  // const [isError, setIsError] = useState(false);

  const { isLoading, countries, fetchCountries } = useAsync();

  const handleFilter = (filteredRegion) => {
    fetchCountries(url);
    const filteredCountries = countries.filter(
      (country) => country.region === filteredRegion
    );
    setFiltered(filteredCountries);
  };

  const handleSearch = async (searchValue) => {
    setFiltered([]);
    const regionEndpoint = `name/${searchValue}`;
    fetchCountries(url, regionEndpoint);
  };

  useEffect(() => {
    fetchCountries(url);
  }, [fetchCountries]);

  const allCountries = (
    <section className={"countries"}>
      {filtered.length > 1
        ? filtered.map((country) => (
            <Countries key={country.name.common} {...country} />
          ))
        : countries.map((country) => (
            <Countries key={country.name.common} {...country} />
          ))}
    </section>
  );

  return (
    <section>
      <Container>
        <FilterSearch onFilter={handleFilter} onSearch={handleSearch} />
        {isLoading ? <Loading /> : allCountries}
      </Container>
    </section>
  );
};

export default HomePage;
