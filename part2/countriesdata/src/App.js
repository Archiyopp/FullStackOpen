import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => setData((d) => response.data));
  }, []);

  useEffect(() => {
    if (countryName) {
      axios
        .get(`https://goweather.herokuapp.com/weather/${countryName}`)
        .then((res) => {
          console.log(res.data);
          setWeather((w) => res.data);
        });
    }
  }, [countryName]);

  const filteredData =
    data.length > 0
      ? data.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];
  useEffect(() => {
    if (filteredData.length === 1) {
      setCountryName(filteredData[0].name);
    }
  }, [filteredData]);

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
        filteredData.map((country) => (
          <p key={country.name}>
            {country.name}{' '}
            <button onClick={() => setQuery(country.name)}>
              show
            </button>
          </p>
        ))
      ) : (
        filteredData.map((country) => {
          return (
            <div key={country.name}>
              <h2>{country.name}</h2>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <h3>languages</h3>
              <ul>
                {country.languages.map((language) => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
              <img
                src={country.flag}
                alt="country flag"
                height="150"
              />
              {weather ? (
                <>
                  <h3>Weather in {countryName}</h3>
                  <p>
                    <b>temperature: </b>
                    {weather.temperature}
                  </p>
                  <p>
                    <b>wind: </b>
                    {weather.wind}
                  </p>
                  <p>
                    <b>description: </b>
                    {weather.description}
                  </p>
                </>
              ) : null}
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
