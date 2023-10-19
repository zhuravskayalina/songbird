import styles from './App.module.scss';
import { Link } from 'react-router-dom';
import soundClient from './SoundClient/SoundClient.ts';

function App() {
  return (
    <div className={styles.main}>
      <h1 className={styles.responsiveText}>SongBird</h1>
      <p className={styles.description}>Quiz game for recognizing birds by their voices.</p>
      <div className={styles.imageBlock}>
        <Link className={styles.playBtn} to="game" onClick={() => soundClient.playClick()}>
          Play
        </Link>
      </div>
    </div>
  );
}

export default App;
