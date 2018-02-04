import React from 'react'
import './Card.css'
//on Delete prop, if delete func coming through render it

const Card = ({ data, type, favorite }) => {
  const entries = Object.entries(data)
  const name = entries.shift()
  const isFavorite = () => {
    const favoriteData = entries.slice(entries.length - 1)
    if(favoriteData[0][1] === true) {
      console.log("true")
      return '.favorite'
    } else return ''
  }
  const info = entries.map((entry, index) => 
    ( <p key={type + index}> { entry } </p> ))

  return (
    <div className={`Card ${isFavorite()}`} onClick={favorite} id={name[1]}>
      <h2>{name[1]}</h2>
      { info }
    </div>
  )
}

export default Card