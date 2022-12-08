import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAsync from "../../hooks/use-async";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./CountryDetails.css";
import Container from "../UI/Container.styled";
import CountryAttributes from "./CountryAttributes";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const { isLoading, countries, fetchCountries: fetchACountry } = useAsync();

  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  const { name } = useParams();
  const url = `https://restcountries.com/v3.1`;

  // const handleFetch = useCallback(async () => {

  // }, [fetchACountry, name, url]);

  const endPoint = `name/${name}`;
  useEffect(() => {
    fetchACountry(url, endPoint);
  }, [fetchACountry, url, endPoint]);

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
