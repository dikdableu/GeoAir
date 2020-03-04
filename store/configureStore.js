import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoriteReducer'

export default createStore(combineReducers({
  listFavorite: toggleFavorite,
}))
