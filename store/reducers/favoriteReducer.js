function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        action.listFavorite
      ]
      break;
    case 'INIT_FAVORITE':
<<<<<<< HEAD
      console.log("init")
      console.log(action.data)
=======
>>>>>>> 92c3a063746dcbacd92c4aae86a816299d3cd11f
      return [
        action.data
      ]
      break;
  default:
    return state
  }
}

export default toggleFavorite
