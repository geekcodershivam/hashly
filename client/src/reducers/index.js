import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducers'
import urlReducer from './urlReducer'
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  url:urlReducer
})