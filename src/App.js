import { useState } from 'react';
import styles from '../src/style.module.css'

function App() {
  const [temperature, setTemperature] = useState(68);

  const HandleSubmit = (e) => {
    if(e.target.id === "pushedUp") {
      setTemperature(temperature + 1);
    }

    if (e.target.id === "pushedDown") {
      setTemperature(temperature - 1);
    }
  }
  return (
    <div className={styles.centerStyle}>
      <div className={styles.boxStyle}>
        <h1 className={styles.temperatureStyle}>{temperature}°F</h1>
        <div>
          <button  id="pushedUp" onClick={(e) => HandleSubmit(e)} className={[styles.btnStyle, styles.btnUpStyle].join(" ")} type="button">⮝</button>
           <button id="pushedDown" onClick={(e) => HandleSubmit(e)} className={[styles.btnStyle, styles.btnDownStyle].join(" ")} type="button">⮟</button>
        </div>
      </div>
    </div>
  );
}

export default App;
