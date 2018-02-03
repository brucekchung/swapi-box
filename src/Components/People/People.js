import React from 'react'
import Card from '../Card/Card'

const People = ({ peopleData, favorite }) => {
  const cards = peopleData.map((card, index) => 
    ( <Card key={`people${index}`} 
            data={card} 
            type="peopleCard" 
            favorite={favorite}/> ))

  return (
    <div className="People">
      { cards }
    </div>
  )
}

export default People