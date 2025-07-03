import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "512cb53ebadc26c95f5c21ccbb357819";
  let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await res.json();
        console.log(data);

        let result = {
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
    }
  let handleChange = (evt) => {
    setCity(evt.target.value);
    };
    
    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }

  return (
    <div className="SearchBox">
      <h2>Search for the Weather</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
