

import React, { useState, useRef } from 'react';
import styles from './MusicPlayer.module.css';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className={styles.musicPlayerContainer}>
      <audio ref={audioRef} src="/path/to/your/music.mp3" preload="auto"></audio>
      <button onClick={togglePlayPause} className={styles.playPauseButton}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      {isPlaying && (
        <div className={styles.volumeControl}>
          <FaVolumeDown />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
          <FaVolumeUp />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
