import React from 'react'
import Card from '../Card/Card'
//import css

const Planets = ({ planetData }) => {
  const cards = planetData.map(card => ( <Card data={card}/> ))
  
  return (
    <div>
      { cards }
    </div>
  )
}

export default Planets