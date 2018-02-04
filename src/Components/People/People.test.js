import React from 'react'
import { shallow } from 'enzyme'
import People from './People'

describe('People', () => {
  const props = {
    peopleData: [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler",
    }],
    favorite: () => {},
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<People {...props}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})