import { combineReducers } from "redux"

import { windowReducer as dimentions } from "./windowReducer"
import { feedsReducer as feeds } from './feedReducer'

export const rootReducer = combineReducers({
  dimentions,
  feeds
})