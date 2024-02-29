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


  function removeDuplicateObjects(array, key) {
    return array.filter((obj, index, self) => 
        index === self.findIndex((t) => (
            t[key] === obj[key]
        ))
    );
  }

  function Recentlyplayed(){
    const temp = removeDuplicateObjects(recently);
    if(recently[0]){
    return (
      <>
      <Headtitle 
    title="Recently Played"
    />
    <div className="recent flex">
    {recently.slice(0, 10).map(create)}
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

function delhicards(item){
  if(item.genre && item.genre.includes('delhi')){
    return (
      <Card
        key={item.src}
        src={item.src}
        album={item.album}
        genre={item.genre}
        img={item.img}
        title={item.title}
        artist={item.artist}
      />
    );
  }
  return null;
}

  return (
    <>
    <Recentlyplayed/>
    <Headtitle
      title="Popular Artist"
      />
    <div className="artist flex">
    {artist.slice(0, 10).map(artcreate)}
    </div>
    <Headtitle 
    title="Latest Songs"
    />
    <div className="recent flex">
    {all.slice(0, 10).map(create)}
    </div>
    <Headtitle 
    title="Delhi Scene"
    Link="/s/delhi"
    />
    <div className="recent flex">
    {all.map(delhicards)}
    </div>
    </>
  )
}

export default Home