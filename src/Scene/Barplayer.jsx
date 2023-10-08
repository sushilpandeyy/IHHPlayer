import {useState} from 'react'
import {Howl, Howler} from 'howler';
const Barplayer = () => {
  const sound = new Howl({
    src: ['https://firebasestorage.googleapis.com/v0/b/ihh-player.appspot.com/o/KING%20OF%20INDIAN%20HIP%20HOP.mp3?alt=media&token=b07fd8d3-b84f-4ddd-8504-5ef900e04b4f&_gl=1*14ng1fu*_ga*MjA4MTAzMzQxNC4xNjk2NzM4MzAw*_ga_CW55HF8NVT*MTY5NjczODMwMC4xLjEuMTY5NjczOTM3Ny42MC4wLjA.', 'https://firebasestorage.googleapis.com/v0/b/ihh-player.appspot.com/o/KING%20OF%20INDIAN%20HIP%20HOP.mp3?alt=media&token=b07fd8d3-b84f-4ddd-8504-5ef900e04b4f&_gl=1*14ng1fu*_ga*MjA4MTAzMzQxNC4xNjk2NzM4MzAw*_ga_CW55HF8NVT*MTY5NjczODMwMC4xLjEuMTY5NjczOTM3Ny42MC4wLjA.']
  });  
  return (
    <div onClick={()=>{sound.play()}}>barplayer 
    </div>
  )
}

export default Barplayer