import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = ({ getStuff }) => (
  <ul className="Nav">
    <li><NavLink to='/People' onClick={getStuff} id="people">People</NavLink></li>
    <li><NavLink to='/Planets' onClick={getStuff} id="planets">Planets</NavLink></li>
    <span className="right">
      <li><NavLink to='/Vehicles' onClick={getStuff} id="vehicles">Vehicles</NavLink></li>
      <li><NavLink to='/Favorites' id="favorites">Favorites</NavLink></li>
    </span>
  </ul>
)

export default Nav