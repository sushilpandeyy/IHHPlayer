import React from 'react'
import { useParams } from 'react-router-dom';
import './Scene.css'
import {album} from '../../Data/newalb'
import Listitem from '../Component/Listitem';

const Albumv = () => {
    const { id } = useParams();
    
    const listitem = (item) => {
      return (
        <Listitem 
        key={item.sq}
        title={item.title}
        img={item.img}
        src={item.src}
        />
      )
    }

    return (
      <div className="albumboxlist">
        <div className="leftsidealb">
          <div className="layer">
            <center>
              <img src={album[0].img} className='albumbannerse' alt="" />
            </center>
            <div className="albumtitle">
              <h2 className='albumtitleh'>{album[0].title}</h2>
              <h3 className='albumartisth'>{album[0].Artist}</h3>
            </div>
          </div>
        </div>
        <div className="rightsidealb">
          {album[0].songs.map(listitem)}
        </div>
      </div>
    )
}

export default Albumv
