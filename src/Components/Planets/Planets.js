import React from 'react'
import Card from '../Card/Card'

const Planets = ({ planetData, favorite }) => {
  const cards = planetData.map((card, index) => 
    ( <Card key={`planet${index}`} 
            data={card} 
            type="planetCard"
            favorite={favorite}/> ))
  
  return (
    <div className="Planets">
      { cards }
    </div>
  )
}

export default Planets