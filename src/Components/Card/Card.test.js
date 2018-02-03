import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'
//cypress

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})