export default class Cleaner {
  constructor(data) {
    this.data = data
  }

  async apiCall() {
    const randomMovie = this.randomMovie()
    const url = `https://swapi.co/api/films/${randomMovie}/`
    const response = await fetch(url)
    
    return await response.json()
  }

  randomMovie() {
    return Math.floor(Math.random() * 7 + 1)
  }

  movie(data) {
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
}