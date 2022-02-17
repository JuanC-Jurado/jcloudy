import React from "react";

import styles from "./styles/InfoDisplay.module.css";

import CurrentInfo from "./CurrentInfo";
import PastForecastInfo from "./PastForecastInfo";

function InfoDisplay({ forecast, current, location, setUnit, unit }) {

  function handleBtn(){
    if(unit === 'm'){
      setUnit('f')
    } else {
      setUnit('m')
    }
  }

  return (
    <div className={styles.infoDisplay}>
      <div className={styles.infoDisplay__header}>
        <h2 className={styles.infoDisplay__regionName}>{`${location.region}, ${location.country} ${location.localtime}`}</h2>
        <button onClick={handleBtn} className={styles.changeUnitsBtn}>Change Units</button>
      </div>
      <div className={styles.infoDisplay__content}>
        <CurrentInfo current={current} unit={unit} />
        {forecast
          ? Object.keys(forecast).map((frcst) => {
              return (
                <PastForecastInfo
                  forecast={forecast[frcst]}
                  unit={unit}
                  key={forecast[frcst].date}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default InfoDisplay;
