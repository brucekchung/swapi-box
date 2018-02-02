import React from 'react'
import './Card.css'

const Card = ({ data, type, favorite }) => {
  const entries = Object.entries(data)
  const name = entries.shift()
  const info = entries.map((entry, index) => 
    ( <p key={type + index}>{entry}</p> ))

  return (
    <div className="Card" onClick={favorite} id={name[1]}>
      <h2>{name[1]}</h2>
      { info }
    </div>
  )
}

export default Card