import React from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import Cardart from '../Component/Cardart'
import {all, artist} from '../../Data/newalb'
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
    <Headtitle
      title="Popular Artist"
      />
    <div className="artist flex">
    {artist.map(artcreate)}
    </div>
    <Headtitle 
    title="Latest Songs"
    />
    <div className="recent flex">
    {all.slice().reverse().map(create)}
    </div>
    
    </>
  )
}

export default Home