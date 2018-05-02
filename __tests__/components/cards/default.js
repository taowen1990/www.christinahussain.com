import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import DefaultCard from './../../../components/cards/default.js'

describe('card', () => {
  it('renders headers and children', () => {
    let page = TestUtils.renderIntoDocument(<DefaultCard title='my title'><p>hello</p></DefaultCard>)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('my title')
    expect(body).toContain('hello')
  })

  // TODO: Jest doesn't capture the thrown error?
  // it('thorws an error without a header', () => {
  //   expect(() => {
  //     TestUtils.renderIntoDocument(<DefaultCard><p>hello</p></DefaultCard>)
  //   }).toThrow(/props should include title/)
  // })
})
