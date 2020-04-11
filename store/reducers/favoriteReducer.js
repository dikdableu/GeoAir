function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      console.log('add favorite')
      console.log(action.listFavorite)
      return [
        action.listFavorite
      ]
      break;
    case 'INIT_FAVORITE':
      console.log("init")
      console.log(action.data)
      return [
        action.data
      ]
      break;
  default:
    return state
  }
}

export default toggleFavorite
