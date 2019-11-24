/**
 * Created by deegha
 */

import * as Actions from '../actions/feedsActions'

const initialState = {
  feeds : [],
  loading: true,
  creating: false,
  page: 0,
  nbPages: 0,
}

export const feedsReducer = (state=initialState, action) => {
  switch(action.type) {
    case Actions.FETCH_FEEDS_REQUEST :
      return {
        ...state,
        loading: true
      }
    case Actions.FETCH_FEEDS_FAIL:
      return {
        ...state,
        loading: false
      }
    case Actions.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        feeds: action.feeds.hits,
        page: action.feeds.page,
        nbPages: action.feeds.nbPages
      }
    case Actions.FETCH_MORE_FEEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        feeds: {
          ...state.feeds,
          ...action.feeds.hits
        },
        page: action.feeds.page,
        nbPages: action.feeds.nbPages
      }
    default :
      return state
  }
}
