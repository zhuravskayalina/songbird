import styles from '../styles/Gallery.module.scss';
import birdsDataEn from '../../data/birds/en.ts';
import { Bird } from '../../types/birds.ts';
import BirdCard from '../components/BirdCard/Card.tsx';
import { useRef } from 'react';

const Gallery = () => {
  const refs = useRef<HTMLParagraphElement[]>([]);

  const scrollToSection = (index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.gallery}>
      <h2 className={styles.gallery__header}>Birds Gallery</h2>
      <p className={styles.gallery__description}>
        Welcome to our Birds Gallery, where you'll embark on a captivating journey through the avian world. This gallery
        features a collection of bird cards, each offering a glimpse into the lives of these magnificent creatures.
      </p>
      <p>Here's what you can expect from our gallery:</p>
      <ul className={styles.gallery__list}>
        {Object.keys(birdsDataEn).map((key, index) => (
          <li key={key}>
            <button className={styles.gallery__button} onClick={() => scrollToSection(index)}>
              {key}
            </button>
          </li>
        ))}
      </ul>

      <main>
        {Object.keys(birdsDataEn).map((key, index) => (
          <div key={key}>
            <p className={styles.list__title} key={key} ref={(element) => (refs.current[index] = element!)}>
              <span className={styles.list__index}>{index + 1}.</span>
              {key}
            </p>
            <ul className={styles.list}>
              {birdsDataEn[key as keyof typeof birdsDataEn].map((bird: Bird) => (
                <li className={styles.list__item} key={`${bird.name}${bird.id}`}>
                  <BirdCard bird={bird} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Gallery;
