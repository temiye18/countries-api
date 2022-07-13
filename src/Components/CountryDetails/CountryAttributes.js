import React from "react";
import { Link } from "react-router-dom";
import classes from "./CountryDetails.module.css";

const CountryAttributes = ({ countries }) => {
  const {
    name: { common },
    flags,
    altSpellings: nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countries[0];
  const currency = Object.values(currencies);
  const countryCurrency = currency[0].name;

  const language = Object.values(languages);
  const countryLanguages = language.map((item, index) => (
    <span key={index}>{item}, </span>
  ));
  // console.log(countryLanguages);

  const borderCountry =
    borders &&
    borders.map((border, index) => (
      <span className={classes.borders} key={index}>
        <Link to={`/details/${border}`}>
          <button>{border}</button>
        </Link>
      </span>
    ));
  return (
    <div className={classes.details__grid}>
      <div className={classes.country__flag}>
        <img src={flags.png} alt="flag_img" />
      </div>

      <div className={classes.country__attributes}>
        <div className={classes.attribute__container}>
          <div className={classes.attribute_1}>
            <h3>{common}</h3>
            <p>
              Native Name:{" "}
              <span className={classes.details__span}>{nativeName[1]}</span>
            </p>
            <p>
              Population:{" "}
              <span className={classes.details__span}>{population}</span>
            </p>
            <p>
              Region: <span className={classes.details__span}>{region}</span>
            </p>
            <p>
              Sub Region:{" "}
              <span className={classes.details__span}>{subregion}</span>
            </p>
            <p>
              Capital: <span className={classes.details__span}>{capital}</span>
            </p>
          </div>
          <div className={classes.attribute_2}>
            <p>
              Top Level Domain:{" "}
              <span className={classes.details__span}>{tld[0]}</span>
            </p>
            <p>
              Currencies:{" "}
              <span className={classes.details__span}>{countryCurrency}</span>
            </p>
            <p>
              Languages:{" "}
              <span className={classes.details__span}>{countryLanguages}</span>
            </p>
          </div>
        </div>
        {borderCountry && (
          <div className={classes.border__countries}>
            <p>Border Countries: {borderCountry}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryAttributes;
