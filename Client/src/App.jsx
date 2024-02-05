import React, { useState, useRef } from "react";
import Layout from "../src/Scene/Layout"
import usePlayingStore from '../src/State/playing.js';


function App() {
  const musicRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const { playing } = usePlayingStore((state) => ({ playing: state.playing }));
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
  const playSongHandler = () => {
		if (isPlaying) {
			musicRef.current.pause();
		} else {
			musicRef.current.play();
		}
	};
  return (
    <>
      <Layout/>
      <button 
      onClick={playSongHandler}>PLAY</button>
      <Audio
      src={playing.src}
      ref={musicRef}
      />

    </>
  )
}

export default App
