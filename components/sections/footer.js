import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { date: new Date() }
  }

  render () {
    return (
      <div id='footer'>
        <Row>
          <Col md={12} style={{textAlign: 'center'}}>
            <p>© Christina Hussain, {this.state.date.getFullYear()}</p>
          </Col>
        </Row>
      </div>
    )
  }
}
