import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";
import "aos/dist/aos.css";

const Countries = ({
  name: { common },
  region,
  capital,
  population,
  flags: { png },
}) => {
  return (
    <div
      to={`/details/${common}`}
      className="country__links"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
          <Link to={`/details/${common}`} className="country__links">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Countries;
