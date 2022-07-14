import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./CountryDetails.css";
import Container from "../UI/Container.styled";
import CountryAttributes from "./CountryAttributes";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  const { name } = useParams();
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

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <section className="details__section">
      <Container>
        <div className="country__details">
          <div className="back__link">
            <button className="back" onClick={goToPreviousPath}>
              <HiOutlineArrowNarrowLeft className="back__arrow" />
              <span>Back</span>
            </button>
          </div>

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
