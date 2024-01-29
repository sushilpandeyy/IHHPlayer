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
  playlist: [],
  index: 0,
  setindex: (number) => {
    set(() => ({
      index: number
    }))
  },
  addsong: (prop) => {
    set((state) => ({
      playlist: [...state.playlist, prop]
    }))
  },
  addatstart: () => {
    set((state) => ({
        playing: [state.playlist[0]],
        playlist: state.playlist.slice(1), 
    }))
  },
  play: (props) => {
    set(() => ({
        playing: props,
    }))
  },
  setbackup: (props)=> {
    set(() => ({
      playing: props,
    }))
  }
});

const usePlayingStore = create(
  devtools(
    persist(PlayingStore, {
      name: "playingstoredata"
    })
  )
);

export default usePlayingStore;
