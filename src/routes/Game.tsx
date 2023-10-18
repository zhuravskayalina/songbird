import Levels from '../components/Levels/Levels.tsx';
import birdsDataEn from '../../data/birds/en.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import Task from '../components/Task/Task.tsx';
import { Bird, LevelsEn } from '../../types/birds.ts';
import { getRandomBird, shuffleArray } from '../utils/game.ts';
import Options from '../components/Options/Options.tsx';
import BirdCard from '../components/BirdCard/Card.tsx';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import soundClient from '../SoundClient/SoundClient.ts';

const levels = Object.keys(birdsDataEn) as LevelsEn[];

const Game = () => {
  const [levelCounter, setLevelCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [levelData, setLevelData] = useState<Bird[]>();
  const [currentBird, setCurrentBird] = useState<Bird>();
  const [selectedOption, setSelectedOption] = useState<Bird | undefined>();
  const [isBirdGuessed, setBirdGuessed] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    const activeLevel = levels[levelCounter];
    if (activeLevel in birdsDataEn) {
      const data = shuffleArray(birdsDataEn[activeLevel]);
      setLevelData(data);
      const randomBird = getRandomBird(data);
      if (randomBird) {
        setCurrentBird(randomBird);
        console.log(randomBird.name);
      }
    }
  }, [levelCounter]);

  const handleChangeRadioButton = (event: ChangeEvent, id: number) => {
    if (isBirdGuessed) return;
    const { value } = event.target as HTMLInputElement;
    if (Number(value) === currentBird?.id) {
      setScore((prev) => prev + 10);
      setBirdGuessed(true);
      soundClient.playCorrect();
    } else {
      setScore((prev) => prev - 1);
      setBirdGuessed(false);
      soundClient.playWrong();
    }
    setSelectedOption(levelData?.find((bird) => bird.id === id));
  };

  const nextLevel = () => {
    if (isBirdGuessed) {
      if (levelCounter < 5) {
        setLevelCounter((prev) => prev + 1);
        setSelectedOption(undefined);
        setBirdGuessed(false);
        soundClient.playClick();
      } else {
        setGameOver(true);
        soundClient.playWin();
      }
    }
  };

  return (
    <div className={styles.gameBox}>
      <Levels levels={levels} activeLevel={levels[levelCounter]} />
      <div className={styles.score}>Score: {score <= 0 ? 0 : score}</div>
      <Task bird={currentBird} isBirdGuessed={isBirdGuessed} />
      {levelData && (
        <Options
          levelData={levelData}
          handleChange={handleChangeRadioButton}
          currentBird={currentBird}
          selectedOptionId={selectedOption?.id}
        />
      )}
      <BirdCard bird={selectedOption} />
      {!isGameOver && (
        <button
          className={clsx(styles.nextBtn, isBirdGuessed && styles.nextBtn_enabled)}
          disabled={!isBirdGuessed}
          onClick={nextLevel}
        >
          Next level
        </button>
      )}
      {isGameOver && (
        <Link to="/results" className={clsx(styles.nextBtn, isBirdGuessed && styles.nextBtn_enabled)}>
          Go to results
        </Link>
      )}
    </div>
  );
};
export default Game;
