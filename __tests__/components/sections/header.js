import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Header from './../../../components/sections/header.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<Header />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('INFORMATION SCIENCE')
  })
})
