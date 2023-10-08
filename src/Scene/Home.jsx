import React from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import {all} from '../../Data/newalb'
function create(item){
return <Card
key={item.src}
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
    {all.map(create)}
    </>
  )
}

export default Home