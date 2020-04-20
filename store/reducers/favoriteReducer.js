function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'INIT_FAVORITE':
      return [
        action.data
      ]
      break;
  default:
    return state
  }
}

export default toggleFavorite
