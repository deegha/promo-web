/**
 * Created by deegha
 */

import * as Actions from '../actions/feedsActions'

const initialState = {
  feeds : [],
  loading: true,
  creating: false
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
        feeds: action.feeds
      }
    // case Actions.VOTE_UP: 
    //   const feeds = state.feeds

    //   const newFeeds = feeds.map(feed => { 
    //     if(feed.id === action.feedId) {
          
    //       const x  = {
    //         ...feed,
    //         voteUp: feed.voteUp+1,
    //         currentUserLiked: true
    //       }
    //       console.log(x, "locatio feeds")
    //       return x
    //     }else {
    //       return feed
    //     }
    //   })

    //   // console.log(newFeeds, "location new feeds")

    //   return {
    //     ...state,
    //     feeds:newFeeds
    //   }
    default : 
      return state
  }
}