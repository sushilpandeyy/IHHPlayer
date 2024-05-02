import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../Component/SearchBox';
import Cardart from '../Component/Cardart';
import Headtitle from '../Component/Headtitle';

//const mainurl = "http://localhost:3000";
 const mainurl = "https://api.contactsushil.me";

function Explore() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(mainurl + '/artistlimit');
        setArtists(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SearchBox />
      <div className="mt-5">
        <Headtitle title="Hit Artists" />
        <div className="grid grid-cols-5 mobilecards mt-5">
          {artists.map((artist) => (
            <Cardart
              key={artist.artistkey}
              src={artist.img}
              title={artist.name}
              link={artist.artistkey}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
