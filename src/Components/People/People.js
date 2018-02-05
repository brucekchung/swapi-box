import React from 'react'
import Card from '../Card/Card'
import { arrayOf, object, func, string } from 'prop-types'

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

People.propTypes = {
  data: arrayOf(object),
  type: string,
  favorite: func,
}

export default People