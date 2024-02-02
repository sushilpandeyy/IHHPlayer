import React from 'react'
import { useParams } from 'react-router-dom';
import './Scene.css'
import {album} from '../../Data/newalb'
import Listitem from '../Component/Listitem';

const Albumv = () => {
    const { id } = useParams();

    function findElementByKeyValue(array, key, value) {
      return array.find(item => item[key] === value);
    }

    const element = findElementByKeyValue(album, 'key', id);

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
              <img src={element.img} className='albumbannerse' alt="" />
            </center>
            <div className="albumtitle">
              <h2 className='albumtitleh'>{element.title}</h2>
              <h3 className='albumartisth'>{element.Artist}</h3>
            </div>
          </div>
        </div>
        <div className="rightsidealb">
          {element.songs.map(listitem)}
        </div>
      </div>
    )
}

export default Albumv
