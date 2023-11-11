import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./Scene/Home.jsx"
import {Provider} from "react-redux"
import { store } from './Scene/store.js'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>,
)
