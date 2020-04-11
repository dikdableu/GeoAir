function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state, action.listFavorite
      ]
      break;
    case 'INIT_FAVORITE':
      console.log("init")
      console.log(action.data)
      return [
        ...state, action.data
      ]
      break;
  default:
    return state
  }
}

export default toggleFavorite
