import React from 'react'
import './Prologue.css'

const Prologue = ({ load }) => {
  return (
    <div className="main">
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h4>Episode: {load.episode}, {load.year}</h4>
            <h1>{load.title}</h1>
          </div>
            <p>{load.prologue}</p>
        </div>
      </section>
    </div>
  )
}

export default Prologue