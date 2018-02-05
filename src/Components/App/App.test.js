/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import 'jest-localstorage-mock';

describe('App', () => {
  let wrapper
  const data = {
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "release_date": "1977-05-25",
    "title": "A New Hope",
  }

  beforeEach(async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(data)
    }))

    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should begin with an empty state.favorites array', () => {
    expect(wrapper.instance().state.favorites).toEqual([])
  })

  it('should be able to add a favorite to state.favorites', () => {
    const closest = () => {return {id: 'Sand Crawler'}}
    const e = {target: {closest}}
    const vehicleData = [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler", 
      "passengers": "30", 
      "vehicle class": "wheeled",
    }]

    wrapper.setState({vehicles: vehicleData})
    expect(wrapper.instance().state.favorites).toEqual([])

    wrapper.instance().toggleFavorite(e)
    expect(wrapper.instance().state.favorites).toEqual(vehicleData)
  })

  it('should contain films data in state on load', () => {
    expect(wrapper.instance().state.films).toBeDefined()
  })

  it('on handleClick, it should make a fetch call and pass the correct type through the api and cleaner functions', async () => {
    expect(wrapper.instance().state.vehicles).not.toBeDefined()
    
    const e = { target: {id: 'vehicles'}}
    const data = {
      results: [{
        "crew": "46",
        "model": "Digger Crawler",
        "name": "Sand Crawler",
        "passengers": "30",
        "vehicle_class": "wheeled"
      }]
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(data)
    }))
    
    wrapper.instance().handleClick(e)
    wrapper.update()

    expect(window.fetch).toHaveBeenCalled()
  })
})

