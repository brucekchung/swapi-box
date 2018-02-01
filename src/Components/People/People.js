import React from 'react'
import Card from '../Card/Card'
import './People.css'

const People = ({ peopleData }) => {
  const cards = peopleData.map(card => ( <Card data={card}/> ))

  return (
    <div className="People">
      { cards }
    </div>
  )
}

export default People