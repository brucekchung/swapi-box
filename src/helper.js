export default class Cleaner {
  constructor(data) {
    this.data = data
  }

  format(data) {
    return data.opening_crawl
  }

  randomMovie() {
    return Math.floor(Math.random() * 7 + 1)
  }

  movie(data) {
    const prologue = data.opening_crawl
    const year = data.release_date
    const title = data.title

    return {
      prologue,
      year,
      title
    }
  }
}