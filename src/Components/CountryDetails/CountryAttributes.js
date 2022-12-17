import React from "react";
import { Link } from "react-router-dom";
import "./CountryDetails.css";

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
      <span className="borders" key={index}>
        <Link to={`/details/${border}`}>
          <button>{border}</button>
        </Link>
      </span>
    ));
  return (
    <div className="details__grid" data-aos="fade-up" data-aos-duration="1000">
      <div className="country__flag">
        <img src={flags.png} alt="flag_img" />
      </div>

      <div className="country__attributes">
        <div className="attribute__container">
          <div className="attribute_1">
            <h3>{common}</h3>
            <p>
              Native Name:{" "}
              <span className="details__span">{nativeName[1]}</span>
            </p>
            <p>
              Population: <span className="details__span">{population}</span>
            </p>
            <p>
              Region: <span className="details__span">{region}</span>
            </p>
            <p>
              Sub Region: <span className="details__span">{subregion}</span>
            </p>
            <p>
              Capital: <span className="details__span">{capital}</span>
            </p>
          </div>
          <div className="attribute_2">
            <p>
              Top Level Domain: <span className="details__span">{tld[0]}</span>
            </p>
            <p>
              Currencies:{" "}
              <span className="details__span">{countryCurrency}</span>
            </p>
            <p>
              Languages:{" "}
              <span className="details__span">{countryLanguages}</span>
            </p>
          </div>
        </div>
        {borderCountry && (
          <div className="border__countries">
            <p>Border Countries: </p>
            {borderCountry}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryAttributes;
