import React from 'react'
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

export default class extends React.Component {
  render () {
    return (
      <div id='contact'>
        <Row>
          <Col md={12} style={{textAlign: 'center'}}>
            <h2>Contact Me</h2>

            <ListGroup>
              <ListGroupItem><a href='mailto:CHussain@uw.edu'>CHussain@uw.edu</a></ListGroupItem>

              <ListGroupItem><a href='https://www.linkedin.com/in/christinahussain'>www.linkedin.com/in/christinahussain</a></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  }
}
