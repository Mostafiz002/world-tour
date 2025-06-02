import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h4>Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={handleVisit}>
        {!visited ? "add to visit" : "remove from visit"}
      </button>
      <br />
      <p>{visited ? "Visited" : "not visited"}</p>
    </div>
  );
};

export default Country;
