import { useState, useEffect } from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import Cardart from '../Component/Cardart'
import {all, artist} from '../../Data/newalb'
import '../Scene/Scene.css'
import usePlayingStore from '../State/playing';
import HomeArtist from '../Component/HomeArtist'



function create(item){
 
return <Card
key={item.src}
src={item.src}
album={item.album}
genre={item.genre}
img={item.img}
title={item.title}
artist={item.artist}/>
}






const Home = () => {
  const [musicdata, setmusicData] = useState(null);
  const [loadingmusic, setLoadingmusic] = useState(true);
  const { recently } = usePlayingStore((state) => ({ recently: state.recently }));

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://ihhpserver.onrender.com/music');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setmusicData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoadingmusic(false);
      }
    };

    fetchData();
  }, [])

  function removeDuplicateObjects(array, key) {
    return array.filter((obj, index, self) => 
        index === self.findIndex((t) => (
            t[key] === obj[key]
        ))
    );
  }

  function Recentlyplayed(){

    const temp = removeDuplicateObjects(recently);
    console.log(temp);
    if(recently[0]){
    return (
      <>
      <Headtitle 
    title="Recently Played"
    />
    <div className="recent flex">
    {recently.map(create)}
    </div>
      </>
    )
  }
  else{
    return(
      <>
      
      </>
    )
  }
}

  return (
    <>
    <Recentlyplayed/>
    <HomeArtist/>
    <Headtitle 
    title="Latest Songs"
    />
   {loadingmusic ? "Loading" : (
  <div className="recent flex">
    {musicdata && musicdata.map(create)}
  </div>
)}

    
    </>
  )
}

export default Home