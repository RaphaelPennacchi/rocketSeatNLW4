import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
	const {
		minutes,
		seconds,
		hasFinished,
		isActive,
		startCountdown,
		resetCountdown,
	} = useContext(CountdownContext);
	const [minuteUpper, minuteLower] = String(minutes).padStart(2, "0").split("");
	const [secondUpper, secondLower] = String(seconds).padStart(2, "0").split("");

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
			{hasFinished ? (
				<button disabled className={styles.countdownButton}>
					Ciclo encerrado
					<img src="icons/tick.svg" alt="tick" />
				</button>
			) : (
				<>
					{isActive ? (
						<button
							type="button"
							className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
							onClick={resetCountdown}
						>
							Abandonar ciclo
						</button>
					) : (
						<button
							type="button"
							className={styles.countdownButton}
							onClick={startCountdown}
						>
							Iniciar um ciclo
						</button>
					)}
				</>
			)}
		</div>
	);
}
