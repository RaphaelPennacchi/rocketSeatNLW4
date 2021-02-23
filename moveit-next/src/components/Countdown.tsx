import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteUpper, minuteLower] = String(minutes).padStart(2, "0").split("");
  const [secondUpper, secondLower] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time -1);
      }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteUpper}</span>
          <span>{minuteLower}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondUpper}</span>
          <span>{secondLower}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
