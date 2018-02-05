import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { func } from 'prop-types'

const Nav = ({ handleClick }) => (
  <ul className="Nav">
    <li><NavLink to='/People' onClick={handleClick} id="people" activeClassName="active">People</NavLink></li>
    <li><NavLink to='/Planets' onClick={handleClick} id="planets" activeClassName="active">Planets</NavLink></li>
    <li><NavLink to='/Vehicles' onClick={handleClick} id="vehicles" activeClassName="active">Vehicles</NavLink></li>
    <li><NavLink to='/Favorites' id="favorites" activeClassName="active">Favorites</NavLink></li>
  </ul>
)

Nav.propTypes = {
  onClick: func,
  handleClick: func
}

export default Nav