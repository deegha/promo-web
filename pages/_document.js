/**
 * Created by Deegha on 19/03/2019
 */

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
            <link rel="shortcut icon"  href='/static/favicon.ico' />
            <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}