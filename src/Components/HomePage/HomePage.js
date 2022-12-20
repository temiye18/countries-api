import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../UI/Container.styled";
import Loading from "../UI/Loading";
import Countries from "./Countries";
import FilterSearch from "./FilterSearch";
import "./HomePage.css";

const url = "https://restcountries.com/v3.1/all";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  const handleFilter = (filteredRegion) => {
    // fetchCountries();
    const filteredCountries = countries.filter(
      (country) => country.region === filteredRegion
    );
    setFiltered(filteredCountries);
  };

  const handleSearch = async (searchValue) => {
    try {
      const resp = await axios.get(
        `https://restcountries.com/v3.1/name/${searchValue}`
      );

      // if (!resp.ok) {
      //   const msg = `country not found ${resp.status} ${resp.statusText}`;
      //   throw new Error(msg);
      // }

      const data = resp.data;
      // setFiltered([]);
      setCountries(data);
    } catch (error) {
      // setIsError(true);
    }
  };

  const fetchCountries = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        const msg = `There was an error: ${resp.status} ${resp.statusText}`;
        throw new Error(msg);
      }
      const data = await resp.json();
      const country = data.slice(0, 20);
      // console.log(country);
      setCountries(country);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // setIsError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

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
