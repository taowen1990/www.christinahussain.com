import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import NewsConnections from './../../../components/sections/newsConnections.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<NewsConnections />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('App')
  })
})
