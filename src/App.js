import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import InfoDisplay from "./components/InfoDisplay";
import RequestForm from "./components/RequestForm";

const key = "d00553b24fbf3483fb62caabfe0f65f9";

function App() {
  const [region, setRegion] = useState("fetch:ip");
  const [unit, setUnit] = useState("m");

  const [forecast, setForecast] = useState(null);
  const [current, setCurrent] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getData(region);
  }, [region]); //eslint-disable-line

  useEffect(() => {
    getData(region);
  }, [unit]); //eslint-disable-line

  function getData(rgn) {
    const url = `http://api.weatherstack.com/forecast?access_key=${key}&units=${unit}&query=${rgn}`;

    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {

        setLocation(apiData.location)

        setCurrent(apiData.current);
        apiData.forecast
          ? setForecast(apiData.forecast)
          : console.log("no hay forecast");
      });
  }

  return (
    <div className={styles.app}>
      <header>
        <h1>JCloudy</h1>
      </header>
      <RequestForm setRegion={setRegion} />
      {current ? <InfoDisplay current={current} forecast={forecast} location={location} setUnit={setUnit} unit={unit} /> : null}
    </div>
  );
}

export default App;
