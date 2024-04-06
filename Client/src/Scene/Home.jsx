import { useState, useEffect } from 'react'
import Headtitle from '../Component/Headtitle'
import Card from '../Component/Card'
import Cardart from '../Component/Cardart'
import {all, artist} from '../../Data/newalb'
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'
import usePlayingStore from '../State/playing';
import axios from 'axios'

function create(item){
 
return <Card
key={item.src}
src={item.src}
album={item.album}
genre={item.genre}
img={item.img}
title={item.title}
artist={item.artist}/>
}

function artcreate(item){
  return <Cardart 
  key={item.key}
  src={item.img}
  link={item.key}
  title={item.name}/>
}


const Home = () => {
  const [latestmusic, setlatestmusic]=useState([]);
  const [delhi, setdelhi] = useState([]);
  const [artist, setartist] = useState([]);
  const [musicdata, setmusicData] = useState(null);
  const [loadingmusic, setLoadingmusic] = useState(true);
  const { recently } = usePlayingStore((state) => ({ recently: state.recently }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.contactsushil.me/latest');
        setlatestmusic(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchDatadelhi = async () => {
      try {
        const response = await axios.get('https://api.contactsushil.me/getgenre/delhi');
        setdelhi(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchArtist = async () => {
      try {
        const response = await axios.get('https://api.contactsushil.me/artistlimit');
        setartist(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchDatadelhi();
    fetchArtist();
  }, []);
  function removeDuplicateObjects(array, key) {
    return array.filter((obj, index, self) => 
        index === self.findIndex((t) => (
            t[key] === obj[key]
        ))
    );
  }

  function Recentlyplayed(){
    const temp = removeDuplicateObjects(recently);
    if(recently[0]){
    return (
      <>
      <Headtitle 
    title="Recently Played"
    />
    <div className="recent flex">
    {recently.slice(0, 10).map(create)}
    </div>
      </>
    )
  }
  else{
    return(
      <>
      
      </>
    )
  }
}

function Preloader(){
  return (
    <>
    <div className="prelaoderdiv">
    <center className='animate-pulse'>
      <img src={logo} alt="" />
    </center>
    </div>
    </>
  )
}

function delhicards(item){
  if(item.genre && item.genre.includes('delhi')){
    return (
      <Card
        key={item.src}
        src={item.src}
        album={item.album}
        genre={item.genre}
        img={item.img}
        title={item.title}
        artist={item.artist}
      />
    );
  }
  return null;
}

  return (
    <>
    <Recentlyplayed/>
    <Headtitle
      title="Popular Artist"
      />
    <div className="artist flex">
    {(artist[0])?artist.map(artcreate):"Loading..."}
    </div>
    <Headtitle 
    title="Latest Songs"
    />
    <div className="recent flex">
    {(latestmusic[0])?latestmusic.map(create):"Loading..."}
    </div>
    <Headtitle 
    title="Delhi Scene"
    Link="/s/delhi"
    />
    <div className="recent flex">
    {(delhi[0])?delhi.map(create):"Loading..."}
    </div>
    </>
  )
}

export default Home