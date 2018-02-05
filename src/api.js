export const getStarWarsData = async (type) => {
  const randomMovie = type === 'films' ? generateRandom() : ''
  const url = `https://swapi.co/api/${type}/${randomMovie}`
  
  try {
    const response = await fetch(url)
    return await response.json()
    
  } catch (error) {
    return 'error'
  }
}

const generateRandom = () => Math.floor(Math.random() * 7 + 1)

export const getSingleUrl = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()

  } catch (error) {
    return 'error'
  }
}
