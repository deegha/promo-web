/**
 * Created by Deegha on 19/03/2019
 */

import Fire  from './firebase'
import { formatFeeds } from './helper'

const baseUrl = "https://us-central1-like-me-65680.cloudfunctions.net/"
// const baseUrl = 'http://localhost:5000/like-me-65680/us-central1/'

const POST = async (path, data) => {
  // console.log('post', baseUrl+path)
  const result = await fetch(baseUrl+path, {
    method: "POST",
    body: JSON.stringify(data) 
  })
  return await result.json()
}   

export const fetchFeeds = () => POST('getAllFeeds')
