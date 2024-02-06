import React, { useState, useRef } from "react";
import "../App.css";
import Barplayer from '../Component/Barplayer';
import Headmenu from '../Component/Headmenu.jsx';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'
import usePlayingStore from '../State/playing';


const Layout = () => {
  const musicRef = useRef(null);
  const { playing } = usePlayingStore((state) => ({ playing: state.playing }));
  const {setcurrenttime} = usePlayingStore((state) => ({setcurrenttime: state.setcurrenttime}));
  const {setduration} = usePlayingStore((state) => ({setduration: state.setduration}));
	const [currentSong, setCurrentSong] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

  const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};
  
  const songEndHandler = () => {
    setIsPlaying(false);
  }
	
  function Preloader(){
    return (
      <>
      <div className="prelaoderdiv">
        <div className="heading">
        </div>
      <center className='animate-pulse'>
      <center> <h3 className="animate-pulse">Loading!!</h3></center> 
        <img src={logo} alt="" />
        <center> <h4 className="animate-pulse">"Click on Play after selecting music"</h4></center> 
      </center>
      <div className="heading">
        
        </div>
      </div>
      </>
    )
  }



  return (
   <>
  <audio
      src={playing.src || "https://ihhplayer.s3.ap-south-1.amazonaws.com/Afkap+Waapsi+Official.mp3"}
      ref={musicRef}
      onLoadedMetadata={updateTimeHandler}
			onTimeUpdate={updateTimeHandler}
      onEnded={songEndHandler}
      />
  <div className="maincontent">
    <div className="Headermenu">
      <Headmenu/>
    </div>
  <div className="box2">  
  <div className="sidecontent">
  <Barplayer
  Adre={musicRef}
  songInfo={songInfo}
	setSongInfo={setSongInfo}
  isPlaying={isPlaying}
	setIsPlaying={setIsPlaying}
  />
  </div>
  <div className="allaudio theme">
  <Outlet 
  isPlaying={isPlaying}
  />
  </div>
  </div>
  </div>
   </>
  )
}

export default Layout