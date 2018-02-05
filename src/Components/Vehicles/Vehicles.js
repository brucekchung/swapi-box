import React from 'react'
import Card from '../Card/Card'
import { arrayOf, object, func, string } from 'prop-types'

const Vehicles = ({ vehicleData, favorite }) => {
  const cards = vehicleData.map((card, index) => 
    ( <Card key={`vehicle${index}`} 
            data={card} 
            type="vehicleCard" 
            favorite={favorite}/> ))

  return (
    <div className="Vehicles">
      { cards }
    </div>
  ) 
}

Vehicles.propTypes = {
  data: arrayOf(object),
  type: string,
  favorite: func,
}

export default Vehicles