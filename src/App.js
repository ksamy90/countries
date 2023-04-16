import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

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
  return (
    <div>
      search countries: <input value={value} onChange={changeValues} />
      {nationData.map((nation) => {
        return <h4 key={nation.tld}>{nation.name.common}</h4>;
      })}
    </div>
  );
};

export default App;
