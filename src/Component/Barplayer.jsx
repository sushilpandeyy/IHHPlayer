import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import playIcon from "../assets/pause.png";
import pauseIcon from "../assets/play.png";

const Barplayer = () => {
  const all = useSelector((state) => state.init);
  const [song, setSong] = useState(all[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [durmin, setdurmin] = useState(0);
  const [dursec, setdursec] = useState(0);
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
  console.log(all)
  return (
    <>
      <audio ref={audioRef} src={song} preload="auto" id='audio-play'></audio>
      <img className="flex-player-banner shadow-2xl" src={all[0].img} alt={all[0].title} />
      <h2 className='player-h1 text-lg'>{all[0].title}</h2>
      <ul className='meta-player'>
        <li className='meta-info text-sm'>{all[0].artist}</li>
        <li className='meta-info text-sm'>{all[0].album}</li>
        <li className='meta-info text-sm'>{audioRef.current ? Math.floor(audioRef.current.duration/60)+":"+Math.floor(audioRef.current.duration%60) : " "}</li>
      </ul>
        <div className="operator">

        <img
          className="flex-control-player-img"
          src={isPlaying ? playIcon : pauseIcon}
          alt=""
          onClick={handlePlayPause}
        />
        </div>
    </>
  );
};

export default Barplayer;
