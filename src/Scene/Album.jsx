import React from 'react'
import {album} from "../../Data/newalb.js"
import Albumcard from '../Component/Albumcard'

function create(item){
  return <Albumcard 
  key={item.key}
  src={item.img}
  title={item.name}
  link={item.key}
  />
}

const Album = () => {
  return (
    <>
    <div className="grid grid-cols-5 gap-5 mobilecards">
    {album.map(create)}
    </div>
    </>
  )
}

export default Album