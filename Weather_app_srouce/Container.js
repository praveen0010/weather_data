import React, { useState } from "react";
import Form from "./Form";
import Temperature from "./Temperature";
import Datas from "./Datas";
import Icon from "./Icon";

const Container = () => {
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [place, setPlace] = useState("");
  const [wind_speed, setWind_speed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [search, setSearch] = useState("");
  const api_key = "d6cbb2b04d3cdc22feac3863824a326b";

  const handelsubmit = () => {
    setError("");
    if (window.navigator.onLine) {
      const fetchitems = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`
          );

          if (!response.ok) {
            throw "error:enter correct city and try again";
          }
          const data = await response.json();

          setHumidity(`humidity ${Math.round(data.main.humidity)}`);
          setWind_speed(`wind speed ${Math.round(data.wind.speed)}km/h`);
          setTemp(`${Math.round(data.main.temp)}°C`);
          setPlace(data.name);
          setIcon(data.weather[0].icon);
          setDescription(data.weather[0].description);
        } catch (err) {
          setError(err);
        }
      };
      fetchitems();
      setSearch("");
    } else {
      setError("No internet connection....");
    }
  };

  return (
    <div className="firstdiv">
      <div className="container">
        <Form
          handelsubmit={handelsubmit}
          search={search}
          setSearch={setSearch}
        />

        {!error ? (
          <main>
            <Icon icon={icon} description={description} />
            <Temperature temp={temp} place={place} />
            <Datas humidity={humidity} wind_speed={wind_speed} />
          </main>
        ) : (
          <h4>{error}</h4>
        )}
      </div>
    </div>
  );
};

export default Container;
