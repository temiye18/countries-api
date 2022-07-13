import React from "react";
import { Link } from "react-router-dom";
import classes from "./Countries.module.css";

const Countries = ({
  name: { common },
  region,
  capital,
  population,
  flags: { png },
}) => {
  return (
    <Link to={`/details/${common}`} className={classes.country__links}>
      <div className={classes.country__card}>
        <img src={png} alt="flag_img" />
        <div className={classes.country__details}>
          <h3>{common}</h3>
          <p>
            Population:
            <span className={classes.country__span}>{population}</span>
          </p>
          <p>
            Region: <span className={classes.country__span}>{region}</span>
          </p>
          <p>
            capital: <span className={classes.country__span}>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Countries;
