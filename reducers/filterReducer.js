
import * as Actions from '../actions/filterActions'

const initialState = {
  filter: 'all'
}

export const  filterReducer = (state=initialState,action) => {

  switch(action.type) {
    default: 
      return state
    case Actions.SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }
  }
}
