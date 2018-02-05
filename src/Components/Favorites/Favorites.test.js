import React from 'react'
import { shallow } from 'enzyme'
import Favorites from './Favorites'

describe('Favorites', () => {
  const props = {
    favoriteData: [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler",
    }],
    favorite: () => {},
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<Favorites {...props}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})