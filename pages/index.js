/**
 * Created by Deegha on 19/03/2019
 */

import React from 'react'
import { connect } from 'react-redux'
import { fetchFeedsAction } from '../actions/feedsActions'
import { setFilter } from '../actions/filterActions'
import { LandingPageView } from '../views/landingPageView/landingPageView'

class LandingPage extends React.Component {

  componentDidMount() {
    if(this.props.feeds.feeds.length < 1) {
      
      this.props.getFeeds()
    }
  }

  render() {
    const { setFilter, filter, feeds:{feeds, loading} } = this.props
    return (
      <LandingPageView 
      setFilter={setFilter}    
      filter={filter}
      feeds={feeds} loading={loading && feeds.length < 1} />
    )
  }
}

const mapStateToProps = ({feeds, filter:{filter}}) => ({
  feeds,
  filter
})

const dispatchToProps = (dispatch) => ({
  getFeeds: () => dispatch(fetchFeedsAction()),
  setFilter: (filter) => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, dispatchToProps)(LandingPage)
