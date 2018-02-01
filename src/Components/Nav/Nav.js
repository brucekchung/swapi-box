import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = ({ handleClick }) => (
  <ul className="Nav">
    <li><NavLink to='/People' onClick={handleClick} id="people">People</NavLink></li>
    <li><NavLink to='/Planets' onClick={handleClick} id="planets">Planets</NavLink></li>
    <span className="right">
      <li><NavLink to='/Vehicles' onClick={handleClick} id="vehicles">Vehicles</NavLink></li>
      <li><NavLink to='/Favorites' id="favorites">Favorites</NavLink></li>
    </span>
  </ul>
)

export default Nav