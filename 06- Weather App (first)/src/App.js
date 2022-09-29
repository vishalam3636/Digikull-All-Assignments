import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=012867a5ba98a924fee3363179b31e36`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            {/* F = 9/5(data.main.temp - 273) + 32*/}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
