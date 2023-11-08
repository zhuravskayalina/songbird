import styles from './WinBanner.module.scss';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface WinBannerProps {
  score: number;
  name: string;
  onChange: (event: ChangeEvent) => void;
  saveWinner: () => void;
  handleStartNewGame: () => void;
}

const WinBanner = ({ score, name, onChange, saveWinner, handleStartNewGame }: WinBannerProps) => {
  return (
    <div className={styles.content}>
      <p className={styles.content__header}>Congratulations</p>
      <p className={styles.content__title}>You beat the game, add your name to see your result on the scoreboard.</p>
      <div className={styles.score}>
        <p className={styles.score__title}>Your score</p>
        <p className={styles.score__number}>{score}</p>
      </div>
      <div className={styles.name}>
        <p className={styles.name__title}>your name</p>
        <input
          value={name}
          onChange={onChange}
          type="text"
          className={styles.name__input}
          placeholder="Add your Name"
        />
      </div>
      <span className={styles.line} />
      <button className={styles.start} onClick={handleStartNewGame}>
        Start again
      </button>
      <Link to='/results' className={styles.goToResults}>Results</Link>
      <button className={styles.save} onClick={saveWinner}>
        Save
      </button>
    </div>
  );
};

export default WinBanner;
