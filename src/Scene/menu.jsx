import React from 'react'
import Men from "../Component/Men"
import {Stack} from '@mui/material';
import home from "../assets/home.png"
import genre from "../assets/genre.png"
import search from "../assets/search.png"
import {Link, Navigate} from 'react-router-dom';

const Menu = () => {
  return (
    <>
    <Stack spacing={2}>
    <ul>
  <li>
  <Men
  icon={home}
  title="Home"
  /></li>
   <li>
  <Men icon={search}
  title="Search"
  />
  </li>
  <li>
  <Men
  icon={genre}
  title="Genre"
  /></li>
  </ul>
  </Stack>
    </>
  )
}

export default Menu