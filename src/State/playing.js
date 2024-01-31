import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const PlayingStore = (set) => ({
  playing: [
    {
      id: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Blowing+UP+Kr%24na.mp3",
      img: "https://img.youtube.com/vi/AwhyFo5N0cg/maxresdefault.jpg",
      title: "Blowing Up",
      artist: "KR$NA",
      genre: "Delhi Scene",
      album: "",
    },
  ],
  play: (props) => {
    set(() => ({
        playing: props,
    }))
  },
});

const usePlayingStore = create(
  devtools(
    persist(PlayingStore, {
      name: "playingstoredata"
    })
  )
);

export default usePlayingStore;
