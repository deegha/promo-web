/**
 * Created by Deegha on 19/03/2019
 */

export const SET_FILTER = 'SET_FILTER' 
export const REMOVE_FILTER = 'REMOVE_FILTER'

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
})