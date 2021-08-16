import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => setData((d) => response.data));
  }, []);

  const filteredData =
    data.length > 0
      ? data.filter((country) =>
          country.name.toLowerCase().includes(query)
        )
      : [];

  return (
    <div>
      <p>
        find countries{' '}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </p>
      {filteredData.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredData.length > 1 ? (
        filteredData.map((country) => <p>{country.name}</p>)
      ) : (
        filteredData.map((country) => (
          <>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
              {country.languages.map((language) => (
                <li>{language.name}</li>
              ))}
            </ul>
            <img src={country.flag} alt="country flag" height="150" />
          </>
        ))
      )}
    </div>
  );
}

export default App;
