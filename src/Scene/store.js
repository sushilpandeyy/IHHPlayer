import { configureStore } from "@reduxjs/toolkit";
import songsreducer from '../features/add/add'
export const store = configureStore({
    reducer: songsreducer
});