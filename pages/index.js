/**
 * Created by Deegha on 19/03/2019
 */

import React from 'react'
import { connect } from 'react-redux'

import { fetchFeedsAction } from '../actions/feedsActions'

import { LandingPageView } from '../views/landingPageView/landingPageView'

class LandingPage extends React.Component {

  componentDidMount() {
    if(this.props.feeds.feeds.length < 1) {
      
      this.props.getFeeds()
    }
  }

  render() {
    const { feeds, loading } = this.props.feeds
    return (
      <LandingPageView feeds={feeds} loading={loading && feeds.length < 1} />
    )
  }
}

const mapStateToProps = ({feeds}) => ({
  feeds
})

const dispatchToProps = (dispatch) => ({
  getFeeds: () => dispatch(fetchFeedsAction())
})

export default connect(mapStateToProps, dispatchToProps)(LandingPage)
