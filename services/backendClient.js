/**
 * Created by Deegha on 19/03/2019
 */
import feedStore from './feedStore'
const fetch = require("node-fetch")

const baseUrl = "https://us-central1-like-me-65680.cloudfunctions.net/"
// const baseUrl = "http://localhost:5000/like-me-65680/us-central1/"

const POST = async (path, data) => {
  // console.log('post', baseUrl+path)
  console.log(data)
  const result = await fetch(baseUrl+path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return await result.json()
}

// export const fetchFeeds = () => POST('getAllPromotions')
export const fetchFeed = (id) => POST('getPromotion', {id})
export const fetchFeeds = async (page, filters, searchText) => {

  const data = {
    searchText: !searchText?"":searchText,
    filters: "",
    page
  }

  if( filters !== "") {
    data.filters = `category:${filters}`
  }

  return POST('getFeeds', data)
}
