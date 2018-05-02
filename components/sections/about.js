import React from 'react'
import { Col, Row, ProgressBar } from 'react-bootstrap'

export default class extends React.Component {
  render () {
    const percent = 30

    return (
      <div id='about'>
        <Row>
          <Col md={12}>
            <h2>About</h2>
            <p>My passion is creating informational experiences that are both functional and meaningful.</p>
            <p>For many years, I was focused on creating impactful experiences for the school and start-up communities that I worked with. After much reflection, I decided I wanted to shift my efforts in a different direction: helping create amazing products that would make meaningful impacts on their users.  To achieve this, I enrolled in graduate school at the University of Washington in order to study UX research and design in the context of information science.</p>
            <p>As a student, I am dedicated to pursuing coursework and hands-on opportunities that enhance my understanding of how humans interact with information and how to then use that understanding to build better experiences and products. I love being part of a team and community filled with individuals who are passionate and dedicated to their work and with whom I can can partner and learn.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p>I am {percent}% done with my degree.</p>
          </Col>
          <Col md={8}>
            <ProgressBar striped active now={percent} label={`${percent}%`} />
          </Col>
        </Row>
      </div>
    )
  }
}
