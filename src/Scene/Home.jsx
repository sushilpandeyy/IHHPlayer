import React from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import {all} from '../../Data/newalb'
function create(item){
return <Card
key={item.src}
src={item.src}
img={item.img}
title={item.title}
art={item.artist}/>
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
    </>
  )
}

export default Home