import React from 'react'
import {all} from '../../Data/newalb.js'
import Card from "../Component/Card.jsx"
import Headtitle2 from '../Component/Headtitle2.jsx'
function artcreate(item){
    return <Card
key={item.src}
src={item.src}
album={item.album}
genre={item.genre}
img={item.img}
title={item.title}
artist={item.artist}/>
}

const Latest = () => {
  return (
    <>
<Headtitle2
      title="Latest Tracks"
      />
    <div className="grid grid-cols-5 gap-2">
    {all.slice().reverse().map(artcreate)}
    </div>
    </>
  )
}

export default Latest