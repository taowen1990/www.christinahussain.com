import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='newsConnections'>
        <Row>
          <Col md={4}>
            <Poloroid src='/static/images/Articles_Illustrator.png' caption='Prototyping in Illustrator' />
            <Poloroid src='/static/images/FullLayoutApp.png' caption='The Screens of the App' />
            <Poloroid src='/static/images/ConnectionsPage.png' caption='"Connections"' />
          </Col>
          <Col md={8}>
            <h2>News Connections App Prototype</h2>

            <h3>Context</h3>
            <p>As the final research project for my Design Methods course, the two other members of my team and I went through the iterative process of creating an artifact that facilitates news discussion with family members.</p>
            <h3>Role</h3>
            <p>I partnered with my team members on the interview, ideation, and user testing processes. I was solely responsible for creation of the wireframes and final visual design for the paper prototype of the application.</p>
            <h3>The Design Process</h3>
            <ol>
              <li>Went through a semi-structured interview process with stakeholders in order to determine their underlying needs and desires regarding communicating with family members about the news.</li>
              <li>Coded the data from the interviews and arranged into themes.</li>
              <li>Developed three personas in order to represent the themes found in the interview data.</li>
              <li>Went through several idea generation sessions in order to develop an artifact (a smartphone application) that would best serve to meet the underlying needs uncovered in the interview process.</li>
              <li>Sketched out the key features of the app, focusing on the most important elements for users.</li>
              <li>Used Adobe Illustrator to create wireframes of the app and eventually a low-fidelity paper prototype.</li>
              <li>Went through a usability testing process with multiple users, noting task success, errors, and general feedback.</li>
              <li>Used the data collected from the usability testing process to create a plan for future iterations of the prototype.</li>
            </ol>
            <h3>Reflections</h3>
            <p>During the interview process, one of the themes that we found popping up again and again was that individuals would like the opportunity to discuss interesting news stories with family members, but that it wasn’t something that they had ever really done, and thus weren’t even sure how to start. There were also several individuals we interviewed who felt that to talk about the news meant inevitably talking about politics, and thus felt hesitant to engage on news topics with family members who were more liberal or conservative than they were. With this information in mind, my team and I sought to identify an artifact that would create opportunities for family members to discuss news stories with each other, while at the same time allowing them to avoid talking about politics should they wish to. After much ideation and discussion we came up with several ideas (including several board game possibilities), but ultimately decided on creating a smart phone application; a major factor in that decision was that we wanted the artifact to be usable for families that weren’t living in a single household.  Our most important goal for the app was helping build connection, in as inclusive a way as possible, and thus we opted for the type of artifact that we felt would encompass the greatest variety of family situations. During the design process for the app, when making decisions, we continued to return to that core value of connection, ensuring that every “feature” we included was supportive of it. Once I had completed our paper prototype for usability testing, we also made sure to include questions for our testers regarding how using the various features would make them feel more or less connected to family members, and what additional could be done to support that connectedness. While making and testing the paper prototype marked the end of my group’s assignment, I am hoping to continue iterating on the prototype based on user testing and eventually actually build the app (stay tuned!).</p>
          </Col>
        </Row>
      </div>
    )
  }
}
