import { Bird } from '../../../types/birds.ts';
import { ChangeEvent } from 'react';
import styles from './Options.module.scss';
import { clsx } from 'clsx';

interface SelectProps {
  levelData: Bird[];
  handleChange: (event: ChangeEvent, id: number) => void;
  currentBird: Bird | undefined;
  selectedOptionId: number | undefined;
}

const Options = ({ levelData, handleChange, selectedOptionId, currentBird }: SelectProps) => {
  return (
    <div className={styles.radios}>
      {levelData.map(({ name, id }) => (
        <label key={id} htmlFor={`bird-${id}`} className={styles.label}>
          <input
            className={clsx(styles.input)}
            type="radio"
            id={`bird-${id}`}
            value={id}
            onChange={(event) => {
              handleChange(event, id);
            }}
            name="bird"
          />
          <span
            className={clsx(
              styles.customRadio,
              selectedOptionId === id && currentBird!.id === id && styles.right,
              selectedOptionId === id && currentBird!.id !== id && styles.wrong,
            )}
          />
          {name}
        </label>
      ))}
    </div>
  );
};

export default Options;
