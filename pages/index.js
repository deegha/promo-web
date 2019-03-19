/**
 * Created by Deegha on 19/03/2019
 */

import React from 'react'
import { connect } from 'react-redux'

import { fetchFeedsAction } from '../actions/feedsActions'

import { LandingPageView } from '../views/landingPageView/landingPageView'

class LandingPage extends React.Component {

  componentDidMount() {
    console.log(this.props.feeds.feeds, "this.props.feeds.feeds")
    if(this.props.feeds.feeds.length < 1) {
      
      this.props.getFeeds()
    }
  }

  render() {
    const { feeds } = this.props.feeds
    return (
      <LandingPageView feeds={feeds} />
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
