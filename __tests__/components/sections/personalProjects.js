import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import PersonalProjects from './../../../components/sections/personalProjects.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<PersonalProjects />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('Scoreboard Guru')
  })
})
