import { SinglePageView } from '../views/singlePageView/singlePageView'
import { connect } from 'react-redux'
import {  fetchFeeds } from '../services/backendClient'
import { fetchFeedsAction } from '../actions/feedsActions'
import { ErrorBoundary } from '../components'

class SinglePage extends React.PureComponent {

  static async getInitialProps({query}) {
    const slug = query.slug
    try {
      const feedsObj = await fetchFeeds()
      const feed = feedsObj.data.filter( feed => feed.id === slug )[0]
  
      return {slug, feed}
    }catch(err) {
      console.log(err,"sdfdsafsd")
      return {err}
    }
  }

  render() {
    const { feed, err } = this.props
    console.log(err)
    return (
      <ErrorBoundary>
        <SinglePageView feed={feed} />
      </ErrorBoundary>
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
