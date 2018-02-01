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

const planets = (data) => {
  console.log(data.results)
}

const vehicles = (data) => {
  console.log(data.results)
  
}
