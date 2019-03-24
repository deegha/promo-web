/**
 * Created by Deegha on 19/03/2019
 */
import { connect } from 'react-redux'
import { setWindowDimentions } from '../../actions/windowActions'

import css from './styles.scss'
import Link from 'next/link'
import propTypes from 'prop-types'
import {APP_NAME} from '../../config/config'
import { Head, Nav } from '../'

const logo = '../../static/logo.png'

class Header extends React.PureComponent {

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions = () => {
    this.props.setDim({ width: window.innerWidth, height: window.innerHeight })
  }

  render () {

    const { title, description, url, ogImage, rightBtn, window:{isMobile} } = this.props
    
    return(
      <div>
        <Head 
        rightBtn={rightBtn}
        ogImage={ogImage}
        url={url}
        description={description}
        title={title} />
        <div className={css.container}>
          <div className={css.headerLeft}>
            <Link prefetch href="/">
              <a>
                <img src={logo} className={css.logo}/>
                <h1 className={css.siteName}>
                  {APP_NAME}
                </h1>
              </a>
            </Link>
            <h3 className={css.tagline}>
              Flaming your promotions
            </h3>
          </div>
          <div className={css.headerRight}>
            <Nav isMobile={isMobile} />
            {this.props.rightBtn}
          </div>
        </div>
        <div className={css.space} />
      </div>
    )
  }
}

Header.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  url: propTypes.string,
  ogImage: propTypes.string,
  rightBtn: propTypes.any
}

const mapStateToProps = ({window}) => ({
  window
})

const mapDispatchToProps = (dispatch) => ({
  setDim: (dim) => dispatch(setWindowDimentions(dim))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header) 