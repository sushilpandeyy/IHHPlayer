import React, { useState, useEffect, useRef } from 'react';
import playIcon from "../assets/pause.png";
import pauseIcon from "../assets/play.png";
import next from "../assets/next-button.png";
import previous from "../assets/previous.png";
import disz from "../Icon/disc-com.png";
import usePlayingStore from '../State/playing';


const Barplayer = ({
  Adre,
  songInfo,
  setSongInfo,
  isPlaying,
	setIsPlaying,
}) => {
  const { playing} = usePlayingStore((state) => ({ 
    playing: state.playing,
   }));
  const handleTimeSeek = (e) => {
    Adre.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      Adre.current.pause();
      setIsPlaying(false);
    } else {
      Adre.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(()=>{
    if (isPlaying) {
			Adre.current.play();
		}
  },[playing.src]);

  return (
    <>
      <div className="barplayer">
        <div className="imagebanner">
      <center>
        <img className="flex-player-banner mobileimagebp shadow-2xl" src={playing.img} alt={playing.title} />
      </center>
      </div>
      <div className="otherdata">
        <span className="titlemob">
      <h2 className='player-h1 text-2xl'>{playing.title}</h2>
      </span>
      <ul className='meta-player'>
        <li className='meta-info text-sm'>{playing.artist}</li>
        <li className='meta-info text-sm'>{formatTime(songInfo.duration)|| 0}</li>
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
      <p className='text-sm meta-player'>
        {formatTime(songInfo.currentTime)}/{formatTime(songInfo.duration) || 0}
      </p>
      <input
        className='audio-rage'
        type="range"
        min={0}
        max={songInfo.duration || 0}
        value={songInfo.currentTime}
        onChange={handleTimeSeek}
      />
      </div>
      </div>
    </>
  );
};

export default Barplayer;
