import React from "react";
import styles from "./styles/CurrentInfo.module.css";

function CurrentInfo({ current, unit }) {
  return (
    <div className={styles.current}>
      <div className={styles.current__header}>
        <h3>{current.weather_descriptions.join(', ')}</h3>
        <p>Observation Time: {current.observation_time}</p>
      </div>

      <table>
        <tbody className={styles.current__table}>
          <tr className={styles.current__tr}>
            <td>Humidity</td>
            <td>{`${current.humidity}%`}</td>
          </tr>
          <tr className={styles.current__tr}>
            <td>Temperature</td>
            <td>{current.temperature} &#186;{unit === 'm' ? 'C' : 'F'}</td>
          </tr>
          <tr className={styles.current__tr}>
            <td>UV Index</td>
            <td>{current.uv_index}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrentInfo;
