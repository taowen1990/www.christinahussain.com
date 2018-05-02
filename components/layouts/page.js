import React from 'react'
import { Grid } from 'react-bootstrap'
import Head from 'next/head'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/css/bootstrap.css' />
          <title>Christina Hussain: Portfolio</title>

          <link rel='apple-touch-icon' sizes='180x180' href='/static/images/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/images/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/images/icons/favicon-16x16.png' />

          <script src='/static/js/googleAnalytics.js' />
        </Head>

        <Grid>
          { this.props.children }
        </Grid>

      </div>
    )
  }
}
