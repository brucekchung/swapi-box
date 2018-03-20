import React from 'react'
import './Prologue.css'
import Theme from '../../assets/sounds/Theme.mp3'
import { arrayOf, object, oneOfType } from 'prop-types'


const Prologue = ({ filmData }) => {
  const { episode, year, title, prologue } = filmData

  return (
    <div className="main"> 
      <div className="fade"></div>
      <audio src={Theme} autoPlay />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h4>Episode: {episode}, {year}</h4>
            <h1>{title}</h1>
          </div>
          <p>{prologue}</p>
        </div>
      </section>
    </div>
  )
}

Prologue.propTypes = {
  filmData: oneOfType([arrayOf(object), object])
}

export default Prologue