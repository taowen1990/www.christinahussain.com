import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Contact from './../../../components/sections/contact.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<Contact />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('CHussain@uw.edu')
  })
})
