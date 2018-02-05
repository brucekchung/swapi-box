import React from 'react'
import { shallow } from 'enzyme'
import Vehicles from './Vehicles'

describe('Vehicles', () => {
  const props = {
    vehicleData: [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler",
    }],
    favorite: () => {},
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<Vehicles {...props}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})