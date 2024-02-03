import { useState, useEffect } from 'react'
import {album} from "../../Data/newalb.js"
import Albumcard from '../Component/Albumcard'


function create(item){
  return <Albumcard 
  key={item.key}
  src={item.img}
  title={item.title}
  link={item.key}
  />
}

const Album = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://ihhpserver.onrender.com/album');
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
    {loading? "Loading" : <div className="grid grid-cols-5 gap-5 mobilecards">
    {data.map(create)}
    </div>}
    
    </>
  )
}

export default Album