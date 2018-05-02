import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import About from './../../../components/sections/about.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<About />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('My passion')
    expect(body).toContain('%')
  })
})
