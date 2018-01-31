import React from 'react'
import './Banner.css'
import logo from '../../assets/images/starwars-logo.png'
import { NavLink } from 'react-router-dom'

const Banner = () => (
  <div className="Banner-header">
    <NavLink to="/">
      <img src={logo} alt="starwars-logo" />
    </NavLink>
  </div>
)

export default Banner