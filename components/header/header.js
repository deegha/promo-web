/**
 * Created by Deegha on 19/03/2019
 */

import css from './styles.scss'
import Link from 'next/link'
import propTypes from 'prop-types'
import {APP_NAME} from '../../config/config'
import { Head } from '../'

const logo = '../../static/logo.png'

class Header extends React.PureComponent {

  render () {

    const { title, description, url, ogImage, rightBtn } = this.props

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
          </div>
          <div className={css.headerRight}>
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


export default Header