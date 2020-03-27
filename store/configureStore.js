import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoriteReducer'
import userReducer from './reducers/userReducer.js'

export default createStore(combineReducers({
  listFavorite: toggleFavorite,
  user: userReducer
}))
