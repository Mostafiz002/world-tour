import { useState } from "react";
import "./Country.css";
const Country = (props) => {
  const { country, handleVisitedCountry } = props; // destructuring the props we got from countries.jsx , this is when we have 7 or more props, when we have less then we can simply type the props name in the function parameter where we currently have props as the parameter.
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
