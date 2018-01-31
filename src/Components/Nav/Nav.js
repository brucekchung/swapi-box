import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = ({ getStuff }) => (
  <ul className="Nav">
    <li><NavLink to='/People' onClick={getStuff} id="People">People</NavLink></li>
    <li><NavLink to='/Planets' onClick={getStuff} id="Planets">Planets</NavLink></li>
    <span className="right">
      <li><NavLink to='/Vehicles' onClick={getStuff} id="Vehicles">Vehicles</NavLink></li>
      <li><NavLink to='/Favorites' onClick={getStuff} id="Favorites">Favorites</NavLink></li>
    </span>
  </ul>
)

export default Nav