import { combineReducers } from "redux"

import { windowReducer as window } from "./windowReducer"
import { feedsReducer as feeds } from './feedReducer'
import { filterReducer as filter } from './filterReducer'
export const rootReducer = combineReducers({
  window,
  feeds,
  filter
})