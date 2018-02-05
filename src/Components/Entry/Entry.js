import React from 'react'
import { array } from 'prop-types'

const Entry = ({ entry }) => {
  const category = entry[0]
  const answer = () => {
    const item = entry[1]
    
    if (!item.length) {
      return 'N/A'

    } else if (item.length > 1  && Array.isArray(item)) {
      return item.join(', ')

    } else {
      return item
    }
  } 

  return (
    <p> 
      <span className="category">{ category }</span>
      : 
      <span className="answer">{ answer() }</span>
    </p> 
  )
}

Entry.propTypes = {
  entry: array
}

export default Entry