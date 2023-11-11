import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Slider } from '@mui/material';
import playIcon from "../assets/pause-circle-svgrepo-com.png";
import pauseIcon from "../assets/play-svgrepo-com.png";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

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
          <center>
            <img
              className="flex-control-player-img"
              src={isPlaying ? playIcon : pauseIcon}
              alt=""
              onClick={handlePlayPause}
            />
          </center>
        <div className="flex-area-volume">
          <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <VolumeDown />
              <Slider
                aria-label="Volume"
                value={volume}
                onChange={handleChange}
                defaultValue={0.6}
                min={0}
                max={1}
                step={0.01}
              />
              <VolumeUp />
            </Stack>
          </Box>
        </div>
      <div onClick={handlePlayPause}>{all[0].title}</div>
    </>
  );
};

export default Barplayer;
