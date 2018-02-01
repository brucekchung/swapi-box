export default class Cleaner {
  //parse data, api call, 2 files
  films(data) {
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

  people(data) {
    //console.log('peopledata, ', data)
  }
}