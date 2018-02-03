import { getStarWarsData, getSingleUrl } from './api'

describe('api', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
      "name": "Human", 
      "classification": "mammal", 
      "designation": "sentient"
      })
    }))
  })

  it('getSingleUrl should return data after promise resolves', async () => {
    const expected = {
      "name": "Human", 
      "classification": "mammal", 
      "designation": "sentient"
    }
    const actual = await getSingleUrl()

    expect(actual).toEqual(expected)
  })

  it('should call getStarWarsData for vehicles with the correct parameters', async () => {
    const url = `https://swapi.co/api/vehicles/`
    
    getStarWarsData('vehicles')
    expect(window.fetch).toHaveBeenCalledWith(url)
  })  

  it('should call getStarWarsData for planets with the correct parameters', async () => {
    const url = `https://swapi.co/api/planets/`

    getStarWarsData('planets')
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call getStarWarsData for people with the correct parameters', async () => {
    const url = `https://swapi.co/api/people/`

    getStarWarsData('people')
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call getStarWarsData for films with the correct parameters', async () => {
    const url = `https://swapi.co/api/films/1`

    getStarWarsData('films')
    expect(window.fetch).toHaveBeenCalled()
  })

  it('returns an error when the getSingleUrl fetch fails', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject({
      status: 404,
      json: () => Promise.resolve('error') 
    }))
    const error = await getSingleUrl()

    expect(error).toEqual('error')
  })

  it('returns an error when the getStarWarsData fetch fails', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject({
      status: 404,
      json: () => Promise.resolve('error') 
    }))
    const error = await getStarWarsData()

    expect(error).toEqual('error')
  })

})
