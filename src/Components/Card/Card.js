import React from 'react'
import './Card.css'

const Card = ({ data }) => {
  const entries = Object.entries(data)
  const name = entries.shift()
  const info = entries.map(entry => ( <p>{entry}</p> ))

  // console.log("name", name)
  // console.log('entries, ', entries)

  return (
    <div>
      <h2>{name[1]}</h2>
      { info }
    </div>
  )
}

export default Card