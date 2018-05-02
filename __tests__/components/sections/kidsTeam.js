import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import KidsTeam from './../../../components/sections/kidsTeam.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<KidsTeam />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('Seattle Public Library')
  })
})
