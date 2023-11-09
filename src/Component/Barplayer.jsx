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
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={song} preload="auto"></audio>
      <div className="flex-area-player">
        <div className="flex-area-img">
          <img className="flex-player-banner" src={all[0].img} alt={all[0].title} />
        </div>
        <div className="flex-area-Controls">
          <center>
            <img
              className="flex-control-player-img"
              src={isPlaying ? playIcon : pauseIcon}
              alt=""
              onClick={handlePlayPause}
            />
          </center>
        </div>
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
      </div>
      <div onClick={handlePlayPause}>{all[0].title}</div>
    </>
  );
};

export default Barplayer;
