function userReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return fetch('http://18.194.240.99:3000/addUser?username='+ action.user.username, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        console.log(resultat)
        return [
          ...state, resultat[0]
        ]
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

export default userReducer
