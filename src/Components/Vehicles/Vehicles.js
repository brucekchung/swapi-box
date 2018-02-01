import React from 'react'
import Card from '../Card/Card'
//css?

const Vehicles = ({ vehicleData }) => {
  const cards = vehicleData.map(card => ( <Card data={card}/> ))

  return (
    <div>
      { cards }
    </div>
  ) 
}

export default Vehicles