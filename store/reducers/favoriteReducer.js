function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        action.listFavorite
      ]
      break;
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
