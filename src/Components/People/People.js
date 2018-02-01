import React from 'react'
import Card from '../Card/Card'
import './People.css'

const People = ({ peopleData }) => (
  <div className="People">
    People container
    {
      console.log('entries', peopleData)
    }
  </div>
)

export default People