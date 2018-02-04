import React from 'react'
import Card from '../Card/Card'

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

export default Favorites