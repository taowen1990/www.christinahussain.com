import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Ancestry from './../../../components/sections/ancestry.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<Ancestry />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('Solidify our research')
  })
})
