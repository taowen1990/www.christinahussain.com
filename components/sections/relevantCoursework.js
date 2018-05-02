import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DefaultCard from './../cards/default.js'

export default class extends React.Component {
  render () {
    return (
      <div id='relevantCoursework'>
        <Row>
          <Col md={12}>
            <h2>Relevant Coursework</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <DefaultCard title='Fall 2017 (completed)'>
              <ul>
                <li>Participatory Design in Libraries</li>
                <li>Research, Assessment, and Design</li>
                <li>Human Centered Design & Engineering: Directed Research Group</li>
              </ul>
            </DefaultCard>
          </Col>

          <Col md={4}>
            <DefaultCard title='Winter 2018 (in progress)'>
              <ul>
                <li>Visualization Design</li>
                <li>Design Methods</li>
                <li>Organization of Information & Resources</li>
                <li>Human Centered Design & Engineering: Directed Research Group</li>
              </ul>
            </DefaultCard>
          </Col>

          <Col md={4}>
            <DefaultCard title='Sping 2018 (anticipated)'>
              <ul>
                <li>Designing Information Experiences</li>
                <li>Introduction to Programming for Information & Data Science</li>
                <li>Qualitative Research Methods</li>
              </ul>
            </DefaultCard>
          </Col>
        </Row>
      </div>
    )
  }
}
