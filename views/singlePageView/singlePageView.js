import { Header } from '../../components'
import css from './styles.scss'
import {APP_NAME} from '../../config/config'

export class SinglePageView extends React.Component {

  state={
    width: 0,
    height: 0
  }
  
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render () {
    const {feed} = this.props

    const isMobile = this.state.width < 600

    const wrapperStyles = {
      flexDirection: isMobile? 'column':'row',
    }

    return (
      <div className={css.container}>
         <Header
            ogImage={feed.postMedia.url}
            url={`/feed?slug=${feed.id}`}
            title={`${APP_NAME} | ${feed.postText}`} 
            description={feed.postText}/>
        <div className={css.wrapper} style={wrapperStyles} >
          <div className={css.imageArea}>
            <img src={feed.postMedia.url} />
          </div>
          <div className={css.detailsArea}>
            <h1>{feed.postText}</h1>
            <div className={css.profile}>
              <img src={feed.userObj.image} />
            </div>
            <p className={css.location}> 
              {feed.location.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}