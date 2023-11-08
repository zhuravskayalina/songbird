import Levels from '../components/Levels/Levels.tsx';
import birdsDataEn from '../../data/birds/en.ts';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from '../styles/Game.module.scss';
import Task from '../components/Task/Task.tsx';
import { Bird, LevelsEn } from '../../types/birds.ts';
import { getRandomBird, shuffleArray } from '../utils/game.ts';
import Options from '../components/Options/Options.tsx';
import BirdCard from '../components/BirdCard/Card.tsx';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import soundClient from '../SoundClient/SoundClient.ts';
import Modal from '../components/Modal/Modal.tsx';
import { createPortal } from 'react-dom';
import WinBanner from '../components/WinBanner/WinBanner.tsx';
import { useDispatch } from 'react-redux';
import { addWinner } from '../../store/slices/game.ts';

const levels = Object.keys(birdsDataEn) as LevelsEn[];

const Game = () => {
  const [levelCounter, setLevelCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [levelData, setLevelData] = useState<Bird[]>();
  const [currentBird, setCurrentBird] = useState<Bird>();
  const [selectedOption, setSelectedOption] = useState<Bird | undefined>();
  const [isBirdGuessed, setBirdGuessed] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const listRef = useRef<HTMLSpanElement[]>([]);
  const [name, setName] = useState('');
  const [closeWinModal, setCloseWinModal] = useState(false);

  const dispatch = useDispatch();

  const MAX_LEVELS_COUNT = 5;

  useEffect(() => {
    setGameOver(false);
    setBirdGuessed(false);

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

  const handleStartNewGame = () => {
    soundClient.playClick();
    setLevelCounter(0);
    setCloseWinModal(true);
  };

  const onChangeName = (event: ChangeEvent) => {
    setName((event.target as HTMLInputElement).value);
  };

  const handleChangeRadioButton = (id: number, index: number) => {
    if (!isBirdGuessed) {
      if (id === currentBird?.id) {
        setScore((prev) => prev + 10);
        setBirdGuessed(true);
        soundClient.playCorrect();
        listRef.current[index].classList.add(styles.right);

        if (levelCounter === MAX_LEVELS_COUNT) {
          setGameOver(true);
          soundClient.playWin();
        }
      } else {
        setScore((prev) => prev - 1);
        setBirdGuessed(false);
        soundClient.playWrong();
        listRef.current[index].classList.add(styles.wrong);
      }
    }
    setSelectedOption(levelData?.find((bird) => bird.id === id));
  };

  const clearRadiosClasses = (item: HTMLSpanElement) => {
    item.classList.remove(styles.right);
    item.classList.remove(styles.wrong);
  };

  const handleSaveWinner = () => {
    if (name && score) {
      dispatch(addWinner({ name, score }));
      setCloseWinModal(true);
    }
  };

  const nextLevel = () => {
    if (isBirdGuessed) {
      if (levelCounter < 5) {
        listRef.current.forEach((item) => {
          clearRadiosClasses(item);
        });
        setLevelCounter((prev) => prev + 1);
        setSelectedOption(undefined);
        setBirdGuessed(false);
        soundClient.playClick();
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
          listRef={listRef}
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
          onClick={nextLevel}>
          Next level
        </button>
      )}
      {isGameOver && (
        <Link to="/results" className={clsx(styles.nextBtn, isBirdGuessed && styles.nextBtn_enabled)}>
          Go to results
        </Link>
      )}
      {isGameOver &&
        createPortal(
          <Modal close={closeWinModal} setClose={setCloseWinModal}>
            <WinBanner
              score={score}
              name={name}
              onChange={onChangeName}
              saveWinner={handleSaveWinner}
              handleStartNewGame={handleStartNewGame}
            />
          </Modal>,
          document.body,
        )}
    </div>
  );
};
export default Game;
