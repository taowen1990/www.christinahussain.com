import React from 'react'
import { Col, Row, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='header'>
        <Jumbotron>
          <Row>
            <Col md={4}>
              <Poloroid src='/static/images/me.jpg' />
            </Col>
            <Col md={8}>
              <h1>Christina Hussain</h1>
              <p>
                GRADUATE STUDENT, INFORMATION SCIENCE<br />
                UNIVERSITY OF WASHINGTON<br />
                FALL 2017-SPRING 2019
              </p>

              <ButtonToolbar>
                <Button bsStyle='primary' bsSize='large' href='#about'>About</Button>
                <Button bsStyle='primary' bsSize='large' href='#relevantCoursework'>Coursework</Button>
                <Button bsStyle='primary' bsSize='large' href='#contact'>Contact</Button>
                <Button bsStyle='primary' bsSize='large' href='/static/downloads/ChristinaHussain_Resume_March2018.pdf'>Download Resume</Button>
              </ButtonToolbar>

              <hr />

              <p>
                School Projects:
              </p>

              <p>
                <Button bsStyle='primary' href='#newsConnections'>App Prototype</Button>
                <Button bsStyle='primary' href='#kidsteam'>Participatory Design</Button>
                <Button bsStyle='primary' href='#ancestry'>Research Project</Button>
              </p>
              <p>
                Personal Projects:
              </p>

              <p>
                <Button bsStyle='primary' href='#personalProjects'>Scoreboard.guru</Button>
                <Button bsStyle='primary' href='#personalProjects'>Star Team</Button>
                <Button bsStyle='primary' href='#personalProjects'>Research & Recommendations</Button>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
