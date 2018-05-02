import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='kidsteam'>
        <Row>
          <Col md={8}>
            <h2>Kids Team SPL</h2>

            <h3>Context</h3>
            <p>KidsTeam SPL (Seattle Public Library) is an intergenerational co-design team of children (ages 7 – 12) and design researchers in public library settings.  It is a collaboration between the Seattle Public Library, researchers at UW’s iSchool, and the non-profit organization Foundry 10. Its current goal is to use participatory design as a tool for learning how to integrate digital games into successful storytelling activities for children.</p>

            <h3>Role</h3>
            <p>For the fall quarter of 2017, I was a graduate student member of KidsTeam SPL’s research team. I served as an adult co-designer during the weekly co-design sessions, designed and led one of the sessions (with a team of three others), and analyzed and coded the data collected from the seven sessions in order to create design recommendations related to digital games and storytelling activities. </p>

            <h3>Key Takeaways</h3>
            <ol>
              <li>Identified strategies with which digital games can be incorporated into storytelling activities with youth.</li>
              <li>Used co-design as a technique for generating insight and feedback from youth and adults regarding story creation, game play, and game design.</li>
              <li>Learned how to successfully lead and participate in participatory design activities with youth.</li>
            </ol>

            <h3>Project Rundown</h3>
            <p>Participatory Design in Libraries is a new course in UW’s iSchool, that blends classroom learning with real world design and research. Through this course I was able to attend weekly classroom sessions focused on learning about the theory behind participatory design, as well as be an adult participant in KidsTeam SPL.</p>
            <p>For KidsTeam SPL, each week, our team of adult designers/researchers came to the Columbia City Branch of the Seattle Public library to lead and participate in co-design sessions with a group of 15 children, ages 7-11. The design activity of each co-design session was created and led by several members of our team (rotating each week) and would focus on answering a specific design question (e.g. What’s the role of the library in helping kids create stories in video games?).  Participatory design methods such as Stickies and Mixing Ideas, were used in these activities in order to generate, record, and organize feedback from participants.  The end of each session would also always include a guided discussion time, in which the adult researchers/designers would use leading questions to elicit feedback and insights from the participants.</p>
            <p>For all design sessions, our team utilized multiple methods of recording data. All sessions were video recorded, photographs were taken throughout each session, and after each session, analytic memos were written by the graduate student members of the team. Once we had reached the end of the fall session of KidsTeam SPL, myself and the other graduate students then went through and analyzed and coded all of the collected data. From what we learned through our analysis of the data (and our own experiences as participants in the co-design sessions), we were then able to write up design recommendations for SPL’s librarians for creation of storytime activities that integrate the use of digital games.</p>

            <h3>Reflection</h3>
            <p>I truly loved my experience as a member of KidsTeam SPL and the Participatory Design course. For me, it struck a nearly perfect balance between theoretical and hands-on learning, and allowed me to gain a much deeper understanding of an important design and research technique that I was previously unfamiliar with. It also allowed me to reflect upon my previous work experiences and understand how much more valuable the outcomes of certain projects would have been, if I had thought to integrate the end user in the design process itself.</p>
            <p>My goal when enrolling at the iSchool was to enter an environment that would allow me to achieve the breadth and depth of experience that would not be possible in a non-academic context. I want to learn not just the tools and skills necessary for creating meaningful user experiences, I want to be able to understand, analyze, and critique the theories that are behind them.  This course combined with my participation in KidsTeam SPL allowed me to do both.</p>
          </Col>

          <Col md={4}>
            <Poloroid src='/static/images/kidsteam.png' caption='Kids Team in Action' />
            <Poloroid src='/static/images/kidsteam-reflect-1.png' caption='Affinity Diagram' />
            <Poloroid src='/static/images/kidsteam-reflect-2.png' caption='Affinity Diagramming' />
            <Poloroid src='/static/images/kidsteam-reflect-3.png' caption='Design Ideas from the Kids' />
          </Col>
        </Row>
      </div>
    )
  }
}
