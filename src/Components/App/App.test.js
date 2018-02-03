import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper
  const mockFilms = {
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "release_date": "1977-05-25",
    "title": "A New Hope",
  }

  beforeEach(async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockFilms)
      })
    )

    wrapper = await shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  // it('should call getApiData on load', () => {
  //   getApiData = jest.fn()
  //   expect(wrapper.instance().getApiData).toHaveBeenCalled()
  // })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

