function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state, action.listFavorite
      ]
      break;
  default:
    return state
  }
}

export default toggleFavorite
