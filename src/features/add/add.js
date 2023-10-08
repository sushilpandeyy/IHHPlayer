import { createSlice } from "@reduxjs/toolkit";

const initialSong = 
{
  init:[{
  id: "https://firebasestorage.googleapis.com/v0/b/ihh-player.appspot.com/o/Blowing%20Up.mp3?alt=media&token=526dbcd6-8d7f-4c90-8287-ccc857c8479a&_gl=1*yqi6ft*_ga*MjA4MTAzMzQxNC4xNjk2NzM4MzAw*_ga_CW55HF8NVT*MTY5Njc0MTc0Mi4yLjEuMTY5Njc0MTg1OS42MC4wLjA.",
  img: "https://img.youtube.com/vi/AwhyFo5N0cg/maxresdefault.jpg",
  title: "Blowing Up",
  artist: "KR$NA",
  genre: "Delhi Scene",
  album: "",
}]};

export const song = createSlice({
  name: 'song',
  initialState: initialSong,
  reducers: {
    add: (state, action) => {
      const song = {
        id: action.payload.src,
        img: action.payload.img,
        title: action.payload.title,
        artist: action.payload.artist,
        genre: action.payload.genre,
        album: action.payload.album,
      };
      state.init[0]=song;
    },
    remove: (state) => {
      delete state.id;
      delete state.img;
      delete state.title;
      delete state.artist;
      delete state.genre;
      delete state.album;
    },
  },
});

export const { add, remove } = song.actions;
export default song.reducer;
