import { Bird } from '../../../types/birds.ts';
import styles from './Task.module.scss';
import plugImg from '../../assets/images/plug.jpg';
import starsIcon from '../../assets/images/stars.svg';
import CustomAudioPlayer from '../CustomPlayer/CustomPlayer.tsx';
import { clsx } from 'clsx';

interface TaskProps {
  bird: Bird | undefined;
  isBirdGuessed: boolean | undefined;
}

const Task = ({ bird, isBirdGuessed }: TaskProps) => {
  return (
    bird && (
      <div className={styles.container}>
        <img src={isBirdGuessed ? bird.image : plugImg} className={styles.container__image} alt="bird"></img>
        {isBirdGuessed ? (
          <span className={clsx(styles.container__name, styles.container__name_unlocked)}>{bird.name}</span>
        ) : (
          <div className={clsx(styles.container__name, styles.container__name_locked)}>
            <img src={starsIcon} alt="locked bird name" />
          </div>
        )}
        <div className={styles.container__player}>
          <CustomAudioPlayer audioUrl={bird.audio} />
        </div>
      </div>
    )
  );
};

export default Task;
