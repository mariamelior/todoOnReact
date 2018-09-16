
import { combineReducers } from 'redux'
import status from './status'
import name from './name'

export default combineReducers({
  status,
  name
})