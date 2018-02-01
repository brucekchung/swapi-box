export const getStarWarsData = async (type) => {
  const randomMovie = type === 'films' ? generateRandom() : ''
  const url = `https://swapi.co/api/${type}/${randomMovie}`
  const response = await fetch(url)

  return await response.json()
}

const generateRandom = () => Math.floor(Math.random() * 7 + 1)

export const getSingleUrl = async (url) => {
  const response = await fetch(url)

  return await response.json()
}
