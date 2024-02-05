import { useState, useEffect } from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import Cardart from '../Component/Cardart'
import {all, artist} from '../../Data/newalb'
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'
import usePlayingStore from '../State/playing';



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

function artcreate(item){
  return <Cardart 
  key={item.key}
  src={item.img}
  link={item.key}
  title={item.name}/>
}


const Home = () => {
  const [artistdata, setartistData] = useState(null);
  const [loadingartist, setLoadingartist] = useState(true);
  const [musicdata, setmusicData] = useState(null);
  const [loadingmusic, setLoadingmusic] = useState(true);
  const { recently } = usePlayingStore((state) => ({ recently: state.recently }));

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://ihhpserver.onrender.com/music');
        const responseartist = await fetch('https://ihhpserver.onrender.com/artist');
        if (!response.ok) {
          throw new Error('Network response was not ok in music');
        }
        if (!responseartist.ok) {
          throw new Error('Network response was not ok in artist');
        }
        const jsonData = await response.json();
        setmusicData(jsonData);
        const jsonDataa = await responseartist.json();
        setartistData(jsonDataa);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoadingmusic(false);
        setLoadingartist(false);
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

function Preloader(){
  return (
    <>
    <div className="prelaoderdiv">
    <center className='animate-pulse'>
      <img src={logo} alt="" />
    </center>
    </div>
    </>
  )
}

  return (
    <>
    <Recentlyplayed/>
    <Headtitle
      title="Popular Artist"
      />
    {loadingartist? "Loading" :<div className="artist flex">
    {artist.map(artcreate)}
    </div>}
    <Headtitle 
    title="Latest Songs"
    />
   {loadingmusic ? "Loading" : <div className="recent flex">
    {all.map(create)}
    </div>}
    </>
  )
}

export default Home