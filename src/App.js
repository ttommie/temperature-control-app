import { useState } from 'react';
import styles from '../src/style.module.css'

function App() {
  const [temperature, setTemperature] = useState(68);
  const [tempColor, setTempColor ] = useState(styles.neutral)

  const HandleClick = (e) => {
    if (e.target.id === "tempUp") {
      setTemperature(temperature + 1);
    }

    if (e.target.id === "tempDown") {
      setTemperature(temperature - 1);
    }

    if (temperature > 70) {
      setTempColor(styles.hot)
    } else if (temperature < 65) {
      setTempColor(styles.cold)
    } else {
      setTempColor(styles.neutral)
    }
  }

  return (
    <div className={[styles.centerStyle, tempColor].join(" ")}>
      <div className={styles.boxStyle}>
        <h1 className={styles.temperatureStyle}>{temperature}°F</h1>
        <div>
          <button id="tempUp" onMouseDown={(e) => HandleClick(e)} className={[styles.btnStyle, styles.btnUpStyle].join(" ")} type="button">
            ⮝
          </button>
           <button id="tempDown" onMouseDown={(e) => HandleClick(e)} className={[styles.btnStyle, styles.btnDownStyle].join(" ")} type="button">
            ⮟
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
