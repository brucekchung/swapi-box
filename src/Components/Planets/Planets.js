import React from 'react'
import Card from '../Card/Card'
import { arrayOf, object, func, string } from 'prop-types'

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

Planets.propTypes = {
  data: arrayOf(object),
  type: string,
  favorite: func,
}

export default Planets