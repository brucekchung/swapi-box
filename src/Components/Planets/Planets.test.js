import React from 'react'
import { shallow } from 'enzyme'
import Planets from './Planets'

describe('Planets', () => {
  const props = {
    planetData: [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler",
    }],
    favorite: () => {},
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<Planets {...props}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})