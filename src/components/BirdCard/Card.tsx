import styles from './Card.module.scss';
import { Bird } from '../../../types/birds.ts';
import CustomAudioPlayer from '../CustomPlayer/CustomPlayer.tsx';

interface BirdProps {
  bird: Bird | undefined;
}

const BirdCard = ({ bird }: BirdProps) => {
  return (
    <section className={styles.card}>
      {bird && (
        <>
          <img src={bird.image} className={styles.card__img} alt={`${bird.name}, species: ${bird.species}`} />
          <div className={styles.card__nameBox}>
            <p className={styles.card__name}>{bird.name}</p>
            <p className={styles.card__species}>{bird.species}</p>
          </div>
          <div className={styles.card__player}>
            <CustomAudioPlayer audioUrl={bird.audio} />
          </div>
          <div className={styles.card__description}>{bird.description}</div>
        </>
      )}
      {
        !bird && <p>Listen to the player and choose an option</p>
      }
    </section>
  );
};

export default BirdCard;
