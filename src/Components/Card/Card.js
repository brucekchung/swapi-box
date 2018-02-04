import React from 'react'
import Entry from '../Entry/Entry'
import './Card.css'

const Card = ({ data, type, favorite }) => {
  const entries = Object.entries(data)
  const name = entries.shift()
  const last = entries.slice(entries.length - 1)
  const isFavoriteCard = () => {
    if(last[0][1] === true) {
      return 'favorite'
    } else return ''
  }
  
  if (last[0][0] === 'favorite') entries.pop()

  const info = entries.map((entry, index) => 
    ( <Entry key={type + index} entry={entry} /> ))

  return (
    <div className={`Card ${isFavoriteCard()}`} id={name[1]}>
      <button className="favorite-btn" onClick={favorite} />
      <h2>{name[1]}</h2>
      { info }
    </div>
  )
}

export default Card