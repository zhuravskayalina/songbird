import styles from './Levels.module.scss';
import { clsx } from 'clsx';

interface LevelsProps {
  levels: string[];
  activeLevel: string;
}

const Levels = ({ levels, activeLevel }: LevelsProps) => {
  return (
    <ul className={styles.levels}>
      {levels.map((level) => (
        <li key={level} className={clsx(styles.levels__item, level === activeLevel && styles.levels__item_active)}>
          {level}
        </li>
      ))}
    </ul>
  );
};

export default Levels;
