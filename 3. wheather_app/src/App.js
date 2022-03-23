import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [myWeather, setMyWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`
      )
      .then((res) => {
        const newWeather = res.data;
        console.log(newWeather);
        setMyWeather(newWeather);
      })
      .catch((err) => {
        alert(`Something went wrong!\n${err}`);
      });
  }, []);

  if (myWeather != null) {
    return (
      <div>
        <div className="div2">
        </div>
        <div className="div1">
          <h1>City: {myWeather.name}</h1>
        </div>
      </div>
    );
  }
   else {
    return (
      <></>
    );
  }
}

export default App;
