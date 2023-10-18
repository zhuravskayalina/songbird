import { useState, useEffect, useRef } from 'react';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import styles from './CustomPlayer.module.scss';

interface CustomAudioPlayerProps {
  audioUrl: string;
}

function CustomAudioPlayer({ audioUrl }: CustomAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(NaN);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio && isPlaying) {
      audio.pause();
    } else if (audio && !isPlaying) {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.player}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={audioUrl}></audio>
      <button className={styles.button} onClick={togglePlayPause}>
        <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'pause' : 'play'} />
      </button>
      <div className={styles.player__progressBox}>
        <progress className={styles.player__progress} value={currentTime} max={duration || 1}></progress>
      </div>
      <div className={styles.time}>{formatTime(currentTime)}</div>
    </div>
  );
}

export default CustomAudioPlayer;
