import React from 'react'
import './Prologue.css'

const Prologue = ({ filmData }) => {
  const { episode, year, title, prologue } = filmData

  return (
    <div className="main">
      <div className="fade"></div>
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

export default Prologue