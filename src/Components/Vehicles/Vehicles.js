import React from 'react'
import Card from '../Card/Card'

const Vehicles = ({ vehicleData }) => {
  const cards = vehicleData.map((card, index) => 
    ( <Card key={`vehicle${index}`} data={card} type="vehicleCard" /> ))

  return (
    <div className="Vehicles">
      { cards }
    </div>
  ) 
}

export default Vehicles