import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import styles from '../styles/Results.module.scss';

const Results = () => {
  const results = useSelector((state: RootState) => state.game.winners);

  return (
    <div className={styles.results}>
      <h3 className={styles.heading}>Winners</h3>
      {results.length !== 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__heading}>Name</th>
              <th className={styles.table__heading}>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((player) => (
              <tr key={player.name}>
                <td className={styles.name}>{player.name}</td>
                <td className={styles.score}>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!results.length && 'No games yet'}
    </div>
  );
};

export default Results;
