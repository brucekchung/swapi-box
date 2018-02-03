export const addFavorite = (state, name) => {
  const allKeys = Object.keys(state).slice(2)
  const allCards = allKeys.reduce((cardArr, key) => {
    cardArr.push(...state[key])
    return cardArr
  }, [])
  const match = allCards.filter(card => card.name === name)
  
  return {'favorites': [...state.favorites, ...match]}
}

export const removeFavorite = (state, name) => {
  const remaining = state.favorites.filter(card => card.name !== name)

  return {'favorites': [...remaining]}
}
