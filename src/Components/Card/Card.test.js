import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  const props = {
    key: 14,
    data: {
      "model": "Digger Crawler", 
      "name": "Sand Crawler",
    },
    type: 'testCard',
    favorite: () => {},
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card {...props}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})