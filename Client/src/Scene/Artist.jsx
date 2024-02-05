import { useState, useEffect } from 'react'
import {artist} from "../../Data/newalb.js"
import Cardart from '../Component/Cardart'
import './Scene.css'

function artcreate(item){
  return <Cardart 
  key={item.key}
  src={item.img}
  title={item.name}
  link={item.key}
  />
}

const Artist = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://ihhpserver.onrender.com/artist');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])
  return (
    <>
    <div className="grid grid-cols-5 gap-5 mobilecards">
    {artist.map(artcreate)}
    </div>
    </>
  )
}

export default Artist;