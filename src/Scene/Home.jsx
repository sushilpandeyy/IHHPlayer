import React from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import Cardart from '../Component/Cardart'
import {all, artist} from '../../Data/newalb'
import '../Scene/Scene.css'


function create(item){
 
return <Card
key={item.src}
src={item.src}
album={item.album}
genre={item.genre}
img={item.img}
title={item.title}
art={item.artist}/>
}

function artcreate(item){
  return <Cardart 
  key={item.key}
  src={item.img}
  title={item.name}/>
}

const Home = () => {
  return (
    <>
    <Headtitle 
    title="Recently Played"
    />
    <div className="recent flex">
    {all.map(create)}
    </div>
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