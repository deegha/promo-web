/**
 * Created by Deegha on 19/03/2019
 */

import { fetchFeeds } from '../services/backendClient'

export const FETCH_FEEDS_REQUEST = 'FETCH_FEEDS_REQUEST'
export const FETCH_FEEDS_SUCCESS = 'FETCH_FEEDS_SUCCESS'
export const FETCH_FEEDS_FAIL = 'FETCH_FEEDS_FAIL'

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

export const fetchFeedsAction = () => async(dispatch) => {
  dispatch(fetchFeedsRequest())
  try {
    const feeds = await fetchFeeds()
    dispatch(fetchFeedsSuccess(feeds.data))
  }catch(err) {
    console.log(err)
    dispatch(fetchFeedsFail(err))
  }
}