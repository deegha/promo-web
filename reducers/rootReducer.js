import { combineReducers } from "redux"

import { windowReducer as dimentions } from "./windowReducer"
import { feedsReducer as feeds } from './feedReducer'
import { filterReducer as filter } from './filterReducer'
export const rootReducer = combineReducers({
  dimentions,
  feeds,
  filter
})