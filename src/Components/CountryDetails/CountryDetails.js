import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useAsync from "../../hooks/use-async";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./CountryDetails.css";
import Container from "../UI/Container.styled";
import CountryAttributes from "./CountryAttributes";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1`;

  const {
    isLoading,
    isError,
    errorMessage,
    countries,
    fetchCountries: fetchACountry,
  } = useAsync();

  let { goBack } = useHistory();
  const goToPreviousPath = () => {
    goBack();
  };

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

          {isLoading && <Loading />}

          {!isLoading && !isError && countries && countries.length > 0 && (
            <CountryAttributes countries={countries} />
          )}

          {!isLoading && isError && <h2>{errorMessage}</h2>}
        </div>
      </Container>
    </section>
  );
};

export default CountryDetails;
