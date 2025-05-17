import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h4>Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleVisit}>
        {!visited ? "add to visit" : "remove from visit"}
      </button>
      <br />
      {visited ? "Visited" : "not visited"}
    </div>
  );
};

export default Country;
