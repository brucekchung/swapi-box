import React from 'react'
import './Banner.css'
import logo from '../../assets/images/starwars-logo.png'

const Banner = () => (
  <div className="Banner-header">
    <img src={logo} alt="starwars-logo" />
    <h1>API box</h1>
  </div>
)

export default Banner