import React from 'react'
import Men from "../Component/Men"
import {Stack} from '@mui/material';

const Menu = () => {
  return (
    <>
    <Stack spacing={2}>
    <ul>
  <li>
  <Men
  icon="https://cdn.iconfinder.com/stored_data/1286809/128/png?token=1696134776-TNloRy9rDhtRMCW1GT3zlk%2FI6NPRbCTHik9YV5qUUic%3D"
  title="Home"
  /></li>
  <li>
  <Men
  icon="https://cdn.iconfinder.com/stored_data/1286809/128/png?token=1696134776-TNloRy9rDhtRMCW1GT3zlk%2FI6NPRbCTHik9YV5qUUic%3D"
  title="Search"
  /></li>
  <li>
  <Men
  icon="https://cdn.iconfinder.com/stored_data/1286809/128/png?token=1696134776-TNloRy9rDhtRMCW1GT3zlk%2FI6NPRbCTHik9YV5qUUic%3D"
  title="Genre"
  /></li>
  </ul>
  </Stack>
    </>
  )
}

export default Menu