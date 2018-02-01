import React from 'react'
import Card from '../Card/Card'

const People = ({ peopleData }) => {
  const cards = peopleData.map((card, index) => 
    ( <Card key={`people${index}`} data={card} type="peopleCard" /> ))

  return (
    <div className="People">
      { cards }
    </div>
  )
}

export default People