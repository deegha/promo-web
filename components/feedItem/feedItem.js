/**
 * Created by Deegha on 19/03/2019
 */

import css from './styles.scss'
import Link from 'next/link'

export class FeedItem extends React.PureComponent {

  state = {
    loading: true
  }

  onLoadImage = () => {
    this.setState({loading: false})
  }

  render() {
    const { feed, isMobile } = this.props

    const containerStyles = {
      width: isMobile? '150px': '250px',
      margin: isMobile? '10px 3px' : '10px',
    }

    return (
      <Link   href={`/feed?slug=${feed.id}`}>
        <a className={css.link}>
          <div  className={css.container} style={containerStyles}> 
            <div className={css.imageArea}>
              <img 
                onLoad={this.onLoadImage} 
                src={feed.postMedia.url} 
                className={css.image} />
            </div>
            {!this.state.loading ? (
            <div className={css.detailArea}>
              <p className={css.title}>
                {feed.postText}
              </p>
              <div className={css.profile}>
                <div className={css.profileImage}>
                  <img  
                    src={feed.userObj.image} />
                </div>
                <div className={css.profileName}>{feed.userObj.name}</div>
              </div>
              <span className={css.location}>
                {feed.location.description}
              </span>
            </div>
            ): <div /> }
          </div>
        </a>
      </Link>
    )
  }
}