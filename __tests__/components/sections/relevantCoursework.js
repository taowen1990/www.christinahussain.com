import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import RelevantCoursework from './../../../components/sections/relevantCoursework.js'

describe('section', () => {
  it('renders', () => {
    let page = TestUtils.renderIntoDocument(<RelevantCoursework />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('Human Centered Design')
  })
})
