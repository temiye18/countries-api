import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = ({
  name: { common },
  region,
  capital,
  population,
  flags: { png },
}) => {
  return (
    <Link to={`/details/${common}`} className="country__links">
      <div className="country__card">
        <img src={png} alt="flag_img" />
        <div className="country__details">
          <h3>{common}</h3>
          <p>
            Population:
            <span className="country__span">{population}</span>
          </p>
          <p>
            Region: <span className="country__span">{region}</span>
          </p>
          <p>
            capital: <span className="country__span">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Countries;
