import styles from './App.module.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className={styles.main}>
      <h1 className={styles.responsiveText}>SongBird</h1>
      <p className={styles.description}>Quiz app for recognizing birds by their voices.</p>
      <div className={styles.imageBlock}>
        <Link className={styles.playBtn} to="game">
          Play
        </Link>
      </div>
    </div>
  );
}

export default App;
