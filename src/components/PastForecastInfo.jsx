import React from "react";
import styles from "./styles/PastForecastInfo.module.css";

function PastForecastInfo({ forecast, unit }) {

  return (
    <div className={styles.pastForecast}>
      <div className={styles.pastForecast__header}>
        <h4>{forecast.date}</h4>
      </div>

      <table className={styles.pastForecast__table}>
        <tbody>
          <tr className={styles.pastForecast__tr}>
            <td>Average Temp</td>
            <td>{forecast.avgtemp} &#186;{unit === 'm' ? 'C' : 'F'}</td>
          </tr>
          <tr className={styles.pastForecast__tr}>
            <td>UV Index</td>
            <td>{forecast.uv_index}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PastForecastInfo;
