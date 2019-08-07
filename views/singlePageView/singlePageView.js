import { Header, MapComponent } from '../../components'
import css from './styles.scss'
import { APP_NAME, APP_BASE_URL } from '../../config/config'

import { Twitter, Facebook } from 'react-social-sharing'

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
    const container = {
      width: isMobile? '100%': '45%'
    }

    const wrapperStyles = {
      flexDirection: isMobile? 'column':'row',
      width: isMobile? this.state.width: '100%',
      marginTop: isMobile?0: 20
    }
    return (
      <div className={css.container} style={{width:this.state.width}} >
        <Header
            ogImage={feed.postMedia.url}
            url={`${APP_BASE_URL}/feed?slug=${feed.id}`}
            title={`${feed.postText} | ${APP_NAME}`} 
            description={feed.postText}/>
        <div className={css.wrapper} style={wrapperStyles} >
          {isMobile?(
            <div className={css.imageArea} style={container}>
              <img src={feed.postMedia.url} />
              <Facebook link={`${APP_BASE_URL}/feed?slug=${feed.id}`} />
              <Twitter link={`${APP_BASE_URL}/feed?slug=${feed.id}`} />
            </div>
          ):<div/>}
          
          <div className={css.detailsArea} style={container}>
         

          
            <h1>{feed.postText}</h1>
            <div className={css.branding}>
              <div className={css.profile}>
                <img src={feed.userObj.image} />
              </div>
              <h2>
                {feed.userObj.name}
              </h2>
            </div>
           
          
            <div className={css.mapContainer}>
              <MapComponent lng={feed.location.longitude} lat={feed.location.latitude} />
            </div>
            <p className={css.location}> 
              {feed.location.description}
              
            </p>
          </div>
          {!isMobile?(
            <div className={css.imageArea} style={container}>
              <img src={feed.postMedia.url} />
              <Facebook link={`https://promo-web.deegha.now.sh/feed?slug=${feed.id}`} />
              <Twitter link={`https://promo-web.deegha.now.sh/feed?slug=${feed.id}`} />
            </div>
          ):<div/>}
        </div>
        
      </div>
    )
  }
}
