import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
    //window.fetch = jest.fn()
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})

