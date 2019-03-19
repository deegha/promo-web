/**
 * Created by Deegha on 19/03/2019
 */

import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/redux-store'
import { Provider } from 'react-redux'

import styles from '../sharedStyles/styles.scss'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container >
        <Provider store={reduxStore}>
        <div className={styles.body}>
          <Component {...pageProps} />
        </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)    