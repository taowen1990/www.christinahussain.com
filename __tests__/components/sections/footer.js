import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Footer from './../../../components/sections/footer.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<Footer />)
    let body = ReactDOM.findDOMNode(page).textContent
    let date = new Date()

    expect(body).toContain(date.getFullYear())
  })
})
