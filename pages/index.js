/**
 * Created by Deegha on 19/03/2019
 */

import React from 'react'
import { connect } from 'react-redux'
import { fetchFeedsSuccess, fetchFeedsAction } from '../actions/feedsActions'
import { LandingPageView } from '../views/landingPageView/landingPageView'
import { fetchFeeds } from '../services/backendClient'

class LandingPage extends React.Component {

  static async getInitialProps() {

    try {
      const feedsObj = await fetchFeeds(0, "", "")
      const initalfeeds = feedsObj

      return { initalfeeds}
    }catch(err) {
      return {err}
    }
  }

  state = {
    filter: ""
  }

  componentDidMount() {
    if(this.props.feeds.feeds.length < 1) {
      this.props.setinialFeeds(this.props.initalfeeds)
    }
  }

  getFeeds = () => {
    this.props.getFeeds(this.state.filter)
  }

  setFilter = (filter) => {
    this.setState({filter}, () => this.getFeeds())
  }

  render() {
    const {feeds:{feeds, loading} } = this.props
    return (
      <LandingPageView
      setFilter={this.setFilter}
      filter={this.state.filter}
      feeds={feeds} loading={loading && feeds.length < 1} />
    )
  }
}

const mapStateToProps = ({feeds}) => ({
  feeds,
})

const dispatchToProps = (dispatch) => ({
  setinialFeeds: (initalfeeds) => dispatch(fetchFeedsSuccess(initalfeeds)),
  getFeeds: (filter) => dispatch(fetchFeedsAction(filter))
})

export default connect(mapStateToProps, dispatchToProps)(LandingPage)
