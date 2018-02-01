import React from 'react'
import './Card.css'

const Card = (props) => {
  const contents = () => {
    Object.entries(props)
  }
  
  return (
    <div>
      {contents}
    </div>
  )
}

export default Card