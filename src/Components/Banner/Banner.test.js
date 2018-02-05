import React from 'react'
import { shallow } from 'enzyme'
import Banner from './Banner'

describe('Banner', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Banner />)
    
    expect(wrapper).toMatchSnapshot()
  })
})