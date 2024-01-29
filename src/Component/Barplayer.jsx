import React, { useState, useEffect, useRef } from 'react';
import playIcon from "../assets/pause.png";
import pauseIcon from "../assets/play.png";
import next from "../assets/next-button.png";
import previous from "../assets/previous.png";
import disz from "../Icon/disc-com.png";
import usePlayingStore from '../State/playing';

const Barplayer = () => {
  const { playing } = usePlayingStore((state) => ({ playing: state.playing }));
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);


  const handleTimeSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
  
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);


  return (
    <>
      <audio ref={audioRef} src={playing.src} 
        onPlay={() => {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration);
        }}
      />
      <center>
        <img className="flex-player-banner shadow-2xl" src={playing.img} alt={playing.title} />
      </center>
      <h2 className='player-h1 text-2xl'>{playing.title}</h2>
      <ul className='meta-player'>
        <li className='meta-info text-sm'>{playing.artist}</li>
        <li className='meta-info text-sm'>{Math.floor(duration / 60) + ":" + Math.floor(duration % 60)}</li>
      </ul>
      {playing.album ?
        <div className="barplay-box box-border w-100 border-4 rounded-lg border-hidden flex m-1">
          <div className="icon m-2">
            <img src={disz} className={`disc-svg-ic ${isPlaying ? 'animate-spinn' : ''}`} id='disciconalb' alt="" />
          </div>
          <div className="data-alb text-lg m-1">
            {playing.album}
          </div>
        </div> : ""}
      <div className="operator flex">
        <img
          className="flex-control-player-ot"
          src={previous}
          alt=""
          onClick={handlePlayPause}
        />
        <img
          className="flex-control-player-img"
          src={isPlaying ? playIcon : pauseIcon}
          alt=""
          onClick={handlePlayPause}
        />
        <img
          className="flex-control-player-ot"
          src={next}
          alt=""
          onClick={handlePlayPause}
        />
      </div>
      <p className='text-sm'>
        {formatTime(currentTime)}/{formatTime(duration)}
      </p>
      <input
        className='audio-rage '
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleTimeSeek}
      />
    </>
  );
};

export default Barplayer;
