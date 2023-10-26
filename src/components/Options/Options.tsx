import { Bird } from '../../../types/birds.ts';
import { MutableRefObject } from 'react';
import styles from './Options.module.scss';
import { clsx } from 'clsx';

interface SelectProps {
  levelData: Bird[];
  handleChange: (id: number, index: number) => void;
  currentBird: Bird | undefined;
  selectedOptionId: number | undefined;
  listRef: MutableRefObject<HTMLSpanElement[]>;
}

const Options = ({ levelData, handleChange, listRef }: SelectProps) => {
  return (
    <div className={styles.radios}>
      {levelData.map(({ name, id }, index) => (
        <label key={`${name}${id}`} htmlFor={`bird-${id}`} className={styles.label}>
          <input
            className={clsx(styles.input)}
            type="radio"
            id={`bird-${id}`}
            value={id}
            onChange={() => {
              handleChange(id, index);
            }}
            name="bird"
          />
          <span ref={(element) => (listRef.current[index] = element!)} className={clsx(styles.customRadio)} />
          {name}
        </label>
      ))}
    </div>
  );
};

export default Options;
