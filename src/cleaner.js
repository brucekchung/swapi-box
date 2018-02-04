import { getSingleUrl } from './api'

export const cleanData = (data, type) => {
  const types = {
    films: films,
    people: people,
    planets: planets,
    vehicles: vehicles
  }

  return types[type](data)
}

const films = (data) => {
  const prologue = data.opening_crawl
  const year = data.release_date.split('-')[0]
  const title = data.title
  const episode = data.episode_id

  return {
    prologue,
    year,
    title,
    episode
  }
}

const people = async (data) => {
  const peopleArray = data.results.map(async (person) => {
    const name = person.name
    const homeworldData = await getSingleUrl(person.homeworld)
    const homeworld = homeworldData.name
    const population = homeworldData.population
    const speciesData = await getSingleUrl(person.species)
    const species = speciesData.name

    return {
      name,
      homeworld,
      species,
      population
    }
  })

  return await Promise.all(peopleArray)
}

const planets = async (data) => {
  const planetArray = data.results.map(async (planet) => {
    const { name, terrain, population, climate } = planet
    const getResidents = planet.residents.map(async (resident) => await getSingleUrl(resident))
    const residentData = await Promise.all(getResidents)
    const residents = residentData.map(resident => resident.name)

    return {
      name,
      terrain,
      population,
      climate,
      residents
    }
  })

  return await Promise.all(planetArray)
}

const vehicles = (data) => {  
  const vehicleArray = data.results.map(vehicle => {
    const { name, model, vehicle_class, passengers } = vehicle
  
    return {
      name,
      model,
      'vehicle class': vehicle_class,
      passengers
    }
  })
  
  return vehicleArray
}
