import React from 'react'
import Card from '../Card/Card'
import { arrayOf, object, func, string } from 'prop-types'

const Favorites = ({ favoriteData, favorite }) => {
  const cards = favoriteData.map((card, index) => 
    ( <Card key={`favorite${index}`} 
            data={card} 
            type="favoriteCard" 
            favorite={favorite}/> ))

  return (
    <div className="Favorites">
      {cards}
    </div>
  )
}

Favorites.propTypes = {
  data: arrayOf(object),
  type: string,
  favorite: func,
}

export default Favorites