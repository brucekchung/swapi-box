/* eslint-disable */
import { cleanData } from './cleaner'

describe('cleaner', () => {

  it('should format for "films" when the argument is passed to cleanData', () => {
    const data = {
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
      "release_date": "1977-05-25",
      "title": "A New Hope",
    }
    const expected = { 
      prologue: 'It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire\'s\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire\'s\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....',
      year: '1977',
      title: 'A New Hope',
      episode: 4 
    }
    const actual = cleanData(data, 'films')

    expect(actual).toEqual(expected)
  }) 

  it('should make a fetch call when "people" is passed to cleanData', () => {
    const data = {
      results: [{"name": "Jango Fett"}]
    }

    window.fetch = jest.fn()

    cleanData(data, 'people')
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should make a fetch call when "planets" is passed to cleanData', () => {
    const data = {
      results: [{
        "climate": "Arid",
        "name": "Tatooine",
        "population": "120000",
        "residents": ["https://swapi.co/api/people/1/"],
        "terrain": "Dessert",
      }]
    }

    window.fetch = jest.fn()

    cleanData(data, 'planets')
    expect(window.fetch).toHaveBeenCalled()
  })  

  it('should format for "vehicles" when the argument is passed to cleanData', () => {
    const data = {
      results: [{
        "crew": "46",
        "model": "Digger Crawler",
        "name": "Sand Crawler",
        "passengers": "30",
        "vehicle_class": "wheeled"
      }]
    }
    const expected = [{
      "model": "Digger Crawler", 
      "name": "Sand Crawler", 
      "passengers": "30", 
      "vehicle_class": "wheeled"
    }]
    const actual = cleanData(data, 'vehicles')

    expect(actual).toEqual(expected)
  })

})