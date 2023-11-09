import { createSlice } from "@reduxjs/toolkit";

const initialSong = 
{
  init:[{
  id: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Blowing+UP+Kr%24na.mp3",
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
        artist: action.payload.art,
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
