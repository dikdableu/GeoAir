function toggleFavorite(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      fetch('http://18.194.240.99:3000/addFavorite?username='+ action.listFavorite.username+'&villes='+action.listFavorite.ville+'&latitude='+action.listFavorite.lat+'&longitude='+action.listFavorite.longitude, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        return resultat
      })
      .catch( error => {
        setErrorFetch(error)
        console.error(error);
      });
      return [
        ...state, action.listFavorite
      ]
      break;
    case 'INIT_FAVORITE':
      fetch('http://18.194.240.99:3000/listFavoris?idFkUsers='+ action.data, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        return resultat
      })
      .catch( error => {
        setErrorFetch(error)
        console.error(error);
      });
      break;
  default:
    return state
  }
}

export default toggleFavorite
