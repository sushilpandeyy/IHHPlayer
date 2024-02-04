import React from 'react'
import ReactDOM from 'react-dom/client'
import Latest from './Scene/Latest.jsx'
import Album from './Scene/Album.jsx'
import App from './App.jsx'
import Home from "./Scene/Home.jsx"
import Artistmusic from './Scene/Artistmusic.jsx'
import { Analytics } from '@vercel/analytics/react';


import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Artist from "../src/Scene/Artist.jsx"
import Albumv from './Scene/Albumv.jsx'
import Loader from "./Scene/Loader.jsx"

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Loader/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='artist' element={<Artist/>}/>
      <Route path='latest' element={<Latest/>}/>
      <Route path='album' element={<Album/>}/>
      <Route path='artist/:id' element={<Artistmusic/>}/>
      <Route path='album/:id' element={<Albumv/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
     <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
