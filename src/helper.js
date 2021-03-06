const findMatch = (state, name) => {
  const allKeys = Object.keys(state).slice(2)
  const allCards = allKeys.reduce((cardArr, key) => {
    cardArr.push(...state[key])
    return cardArr
  }, [])

  const match = allCards.filter(card => card.name === name)
  return match
}

export const checkFavorite = (state, name) => {
  const match = findMatch(state, name)

  return match[0].favorite
}

export const addFavorite = (state, name) => {
  const match = findMatch(state, name)
  match[0].favorite = true
  
  return {'favorites': [...state.favorites, ...match]}
}

export const removeFavorite = (state, name) => {
  const match = findMatch(state, name)
  match[0].favorite = false

  const remaining = state.favorites.filter(card => card.name !== name)

  return {'favorites': [...remaining]}
}

