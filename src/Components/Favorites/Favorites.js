import React from 'react'
import Card from '../Card/Card'

const Favorites = ({ favoriteData, favorite }) => {
  console.log('favorites, ', favoriteData)
  const cards = favoriteData.map((card, index) => 
    ( <Card key={`favorite${index}`} 
            data={card} 
            type="favoriteCard" 
            favorite={favorite}/> ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default Favorites