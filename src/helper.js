
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

const people = (data) => {
  console.log(data.results)
  const name = data.name
  const homeworld = data.homeworld
  const species = data.species
  //const population

  return {
    name,
    homeworld,
    species,
    //population
  }
}
