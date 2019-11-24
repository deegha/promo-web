/**
 * Created by Deegha on 19/03/2019
 */

import css from './styles.scss'
import Link from 'next/link'

export class FeedItem extends React.PureComponent {

  state = {
    loading: true,
    redirecting: false
  }

  onLoadImage = () => {
    this.setState({loading: false})
  }

  redirect = () => {
    this.setState({redirecting: true})
  }

  render() {
    const { feed, isMobile } = this.props
    const { redirecting } = this.state

    const containerStyles = {
      width: isMobile? '150px': '250px',
      margin: isMobile? '10px 3px' : '10px',
    }


    return (
      <Link   href={`/feed?slug=${feed.id}`}>
        <a className={css.link} onClick={this.redirect} >

          <div  className={css.container} style={containerStyles} >
            <div className={css.imageArea}>
              <img
                onLoad={this.onLoadImage}
                src={feed.image}
                className={css.image} />
            </div>
            {!this.state.loading ? (
            <div className={css.detailArea}>
              <p className={css.title}>
                {feed.title}
              </p>
              <div className={css.profile}>
                <div className={css.profileImage}>
                  <img
                    src={feed.business.image} />
                </div>
                <div className={css.profileName}>{feed.business.name}</div>
              </div>

              {/*#TODO add location descriotion*/}
              {/* <span className={css.location}>
                {feed.location.description}
              </span> */}
            </div>
            ): <div /> }
          </div>


        </a>
      </Link>
    )
  }
}
