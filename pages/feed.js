import { SinglePageView } from '../views/singlePageView/singlePageView'
import { connect } from 'react-redux'
import { fetchFeed } from '../services/backendClient'

class SinglePage extends React.Component {

  static async getInitialProps({query}) {

    const feed = await fetchFeed(query.slug)
    return {feed}
  }

  render() {
    const { feed } = this.props

    console.log(feed)

    return (
      <SinglePageView feed={feed} />
    )
  }
}

export default SinglePage
