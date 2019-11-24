/**
 * Created by Deegha on 19/03/2019
 */

import { fetchFeeds } from '../services/backendClient'

export const FETCH_FEEDS_REQUEST = 'FETCH_FEEDS_REQUEST'
export const FETCH_FEEDS_SUCCESS = 'FETCH_FEEDS_SUCCESS'
export const FETCH_FEEDS_FAIL = 'FETCH_FEEDS_FAIL'
export const FETCH_MORE_FEEDS_SUCCESS = "FETCH_MORE_FEEDS_SUCCESS"

export const fetchFeedsRequest = () => ({
  type: FETCH_FEEDS_REQUEST
})

export const fetchFeedsFail = (err) => ({
  type: FETCH_FEEDS_FAIL,
  err
})

export const fetchFeedsSuccess = (feeds) => ({
  type: FETCH_FEEDS_SUCCESS,
  feeds
})

export const fetchMoreFeedsSuccess = (feeds) => ({
  type: FETCH_MORE_FEEDS_SUCCESS,
  feeds
})

export const fetchFeedsAction = (filter) => async(dispatch, getState) => {

  const state = getState()

  let nextpage = state.feeds.page === 0?0:state.feeds.page+1

  if(nextpage > state.feeds.nbPages) {
    nextpage = state.feeds.nbPages
  }

  dispatch(fetchFeedsRequest())
  try {
    const feeds = await fetchFeeds(nextpage, filter)

    // if(filter === "" ) {
      dispatch(fetchFeedsSuccess(feeds))
    // }else {
    //   dispatch(fetchFeedsSuccess(feeds))
    // }
  }catch(err) {
    console.log(err)
    dispatch(fetchFeedsFail(err))
  }
}


