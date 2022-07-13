import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";
import classes from "./CountryDetails.module.css";
import Container from "../UI/Container.styled";
import CountryAttributes from "./CountryAttributes";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();
  console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;

  const handleFetch = useCallback(async () => {
    try {
      const resp = await axios.get(url);
      const data = resp.data;
      const country = data.slice(0, 20);
      setCountries(country);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [url]);
  console.log(countries);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }

  return (
    <section>
      <Container>
        <div className={classes.country_details}>
          <Link to="/" className={classes.back}>
            <BiLeftArrowAlt /> Back
          </Link>
          {isLoading ? (
            <Loading />
          ) : (
            <CountryAttributes countries={countries} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default CountryDetails;
