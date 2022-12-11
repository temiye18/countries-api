import React, { useEffect, useState } from "react";
import useAsync from "../../hooks/use-async";
import Container from "../UI/Container.styled";
import Loading from "../UI/Loading";
import Countries from "./Countries";
import FilterSearch from "./FilterSearch";
import "./HomePage.css";

const url = "https://restcountries.com/v3.1";

const HomePage = () => {
  const [region, setRegion] = useState("all");

  // const [isError, setIsError] = useState(false);

  const { isLoading, countries, fetchCountries } = useAsync();

  const handleFilter = (filteredRegion) => {
    fetchCountries(url);
    setRegion(filteredRegion);
  };

  console.log(countries);

  const filtered = countries.filter(
    (country) => country.region === region || region === "all"
  );

  console.log(filtered);

  const handleSearch = async (searchValue) => {
    // setRegion("all");
    const regionEndpoint = `name/${searchValue}`;
    fetchCountries(url, regionEndpoint);
  };

  useEffect(() => {
    fetchCountries(url);
  }, [fetchCountries]);

  const allCountries = (
    <section className={"countries"}>
      {filtered.map((country) => (
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
    <section>
      <Container>
        <FilterSearch
          region={region}
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
        {isLoading ? <Loading /> : allCountries}
      </Container>
    </section>
  );
};

export default HomePage;
