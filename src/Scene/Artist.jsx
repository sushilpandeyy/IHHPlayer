import React from 'react'
import {artist} from "../../Data/newalb.js"
import Cardart from '../Component/Cardart'
import './Scene.css'

function artcreate(item){
  return <Cardart 
  key={item.key}
  src={item.img}
  title={item.name}/>
}

const Artist = () => {
  return (
    <>
    <div className="grid grid-cols-5 gap-5 mobilecards">
    {artist.map(artcreate)}
    </div>
    </>
  )
}

export default Artist;