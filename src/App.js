import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import Map from "./components/Map";
import Weather from "./components/Weather";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (value) {
      console.log("fetching countries data");
      axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
        setCountries(response.data);
      });
    }
  }, [value]);

  let nationData = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value);
  });

  const changeValues = (e) => {
    setValue(e.target.value);
  };
  const showMapData = () => {
    setShowMap(!showMap);
  };
  return (
    <div>
      search countries: <input value={value} onChange={changeValues} />
      {nationData.length > 10 && (
        <h4>Too many matches, specify another filter</h4>
      )}
      {nationData.length <= 10 &&
        nationData.length > 1 &&
        nationData.map((nation) => {
          return <h4 key={nation.name.common}>{nation.name.common}</h4>;
        })}
      {nationData.length === 1 &&
        nationData.map((nation) => {
          const [longitude, latitude] = nation.capitalInfo.latlng;
          return (
            <div key={nation.name.common}>
              <h4>{nation.name.common}</h4>
              {showMap && <Map position={nation.capitalInfo.latlng} />}
              <Button
                onClick={showMapData}
                text={showMap ? "close-map" : "show-map"}
                cssbtn={showMap}
              />
              <p>capital {nation.capital[0]}</p>
              <p>area {nation.area}</p>
              <h5>languages</h5>
              {Object.entries(nation.languages).map(([key, val], index) => {
                return (
                  <p key={index}>
                    {key}: {val}
                  </p>
                );
              })}
              <img className="flag" src={nation.flags.png} alt="country-flag" />
              <Weather
                latitude={latitude}
                longitude={longitude}
                value={value}
                city={nation.capital[0]}
              />
            </div>
          );
        })}
    </div>
  );
};

export default App;
