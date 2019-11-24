/**
 * Created by Deegha on 19/03/2019
 */

import { SinglePageView } from '../views/singlePageView/singlePageView'
import { connect } from 'react-redux'
import {  fetchFeed } from '../services/backendClient'
import { fetchFeedsAction } from '../actions/feedsActions'
import { ErrorBoundary } from '../components'

class SinglePage extends React.PureComponent {

  static async getInitialProps({query}) {
    const slug = query.slug
    // try {
    //   const feedsObj = await fetchFeeds()
    //   const feed = feedsObj.data.filter( feed => feed.id === slug )[0]

    //   return {slug, feed}
    // }catch(err) {
    //   return {err}
    // }

    try {
      const feedsObj = await fetchFeed(slug)
      const feed = feedsObj

      return {slug, feed}
    }catch(err) {
      return {err}
    }
  }

  render() {
    const { feed, slug } = this.props
    console.log(feed, slug)
    return (
      <div>hhfdjfd</div>
      // <ErrorBoundary>
      //   <SinglePageView feed={feed} />
      // </ErrorBoundary>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFeeds: () => dispatch(fetchFeedsAction())
})

const mapStateToProps = ({feeds:{feeds}}) => ({
  feeds
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage)
