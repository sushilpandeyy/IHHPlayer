import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import playIcon from "../assets/pause-circle-svgrepo-com.png";
import pauseIcon from "../assets/play-svgrepo-com.png";

const Barplayer = () => {
  const all = useSelector((state) => state.init);
  const [song, setSong] = useState(all[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const handleChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the new source
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, [song]);

  useEffect(() => {
    const audioKey = all[0].id;
    setSong(audioKey);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [all, volume]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      }
      // Set the new source and start playing.
      if (audioRef.current.src !== song) {
        audioRef.current.src = song;
        audioRef.current.load(); // Load the new source
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Error playing audio:", error);
        });
      } else {
        setIsPlaying(!isPlaying);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      audioRef.current.play();
      interval = setInterval(() => {
        if (audioRef.current.ended) {
          setIsPlaying(false);
          clearInterval(interval);
        }
      }, 1000); // Check every second if the audio has ended
    } else {
      audioRef.current.pause();
    }
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts or when isPlaying changes
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={song} preload="auto"></audio>
          <img className="flex-player-banner" src={all[0].img} alt={all[0].title} />
          <h2 className='player-h1'>{all[0].title}</h2>
          <ul className='meta-player'>
            <li>{all[0].artist}</li>
            <li>●</li>
            <li>{all[0].album}</li>
            <li>●</li>
            <li>{audioRef.duration}</li>
          </ul>
          <center>
            <img
              className="flex-control-player-img"
              src={isPlaying ? playIcon : pauseIcon}
              alt=""
              onClick={handlePlayPause}
            />
          </center>
    </>
  );
};

export default Barplayer;
