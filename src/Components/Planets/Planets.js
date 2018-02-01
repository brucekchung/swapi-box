import React from 'react'
import Card from '../Card/Card'

const Planets = ({ planetData }) => {
  const cards = planetData.map((card, index) => 
    ( <Card key={`planet${index}`} data={card} type="planetCard"/> ))
  
  return (
    <div className="Planets">
      { cards }
    </div>
  )
}

export default Planets