import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='ancestry'>
        <Row>
          <Col md={12}>
            <h2>IMPACT OF DIRECT-TO-CONSUMER GENETIC ANCESTRY TESTING RESULTS</h2>

            <h3>Context</h3>
            <p>As the final research project for my Research, Assessment, and Design course, my team and I investigated the impact direct-to-consumer genetic ancestry testing results have on individuals’ perception of their ethnic identity and belonging.</p>

            <h3>Role</h3>
            <p>My research group worked together as a team to:</p>
            <ul>
              <li>Solidify our research question and strategize our approach</li>
              <li>Design and implement survey questionnaires, interviews, and document analyses</li>
              <li>Analyze and code the data</li>
              <li>Summarize and present our findings</li>
              <li>Create a workshop for college students inspired by the findings from our research</li>
            </ul>

            <h3>Key Takeaways</h3>
            <ol>
              <li>Gained experience in writing survey and interview questions to generate usable and meaningful data.</li>
              <li>Used coding and analysis of data to identify important themes within our results.</li>
              <li>Through the design of the workshop, created an effective way of communicating the most significant and relevant findings from our research project.</li>
            </ol>

            <h3>Project Rundown</h3>
            <p>In order to answer to try and answer our research question of “How do the results of direct-to-consumer genetic ancestry testing impact individuals’ perceptions of their ethnic identity and belonging?”, our team identified three data collection instruments that we felt would work best to provide us with substantive and measurable data on participants’ experiences with genetic ancestry testing.  We created a 17-question online survey using Google Forms. The questions focused on the participant’s belief in and connection to their ethnic identity before the test, their test results and how they affected them, as well as their knowledge of genetic ancestry testing as a whole. We used a variety of question formats including multiple choice, check boxes, and scale.  The only questions with a short answer format were those pertaining to the participant’s description of their belief in their ethnicity before the test and the details of their test results, as we felt that no other format would be able to capture the nuances within these answers.  We were also especially careful with word choice and usage in our questions regarding ethnicity and identity, as we wanted to be sure that we would not alienate or offend any of the participants.</p>
            <p>We easily determined that interviews would be an integral way for us to gather rich qualitative data regarding individuals’ experiences with genetic ancestry testing. For our interviews, we opted to use a standardized, open-ended format. Our questions mirrored those of the survey, but allowed for and encouraged elaboration upon their responses. We determined that a third data collection instrument would be useful for triangulation of our data, and thus chose to do document analyses of YouTube videos of individuals opening their genetic ancestry testing results online. We created a rubric for evaluating the videos, focusing on such areas as: their inspiration for taking the test, expectations of their results, and their emotional reaction to their results.</p>
            <p>A limited timeline for collecting our data made it impossible for us to have a large enough pool of participants to generate any type of true representative sample.  For our surveys, we used our networks (social media, friends, colleagues) to distribute them to as diverse a group as possible. For our interviews and document analyses, we made sure to choose both male and female participants and ones with differing (perceived) ethnic backgrounds.  While our overall sample size was small (36 survey respondents, 6 interviews, 20 videos analyzed), from our data we were able to identify some very interesting themes. This included a low impact of genetic ancestry testing results on ethnic identity and the most most common emotional responses to results being “surprised” or “happy”. Our data also showed us that general curiosity was the most popular reason.</p>

            <h3>Reflection</h3>
            <p>My team’s research project was inspired by my literature review of the impact of genetic ancestry testing results. It is a topic that I have been incredibly interested in, ever since receiving my own test results from 23andMe over a year ago. My results were very surprising, and led me to question much of what I had previously taken for granted regarding my ethnic identity. I had used the literature review as an opportunity to learn more about what research has been done regarding how these ancestry testing services are affecting individuals, but found that very few studies have been done. As these genetic testing services are becoming increasingly popular and commonplace, I felt that it was important that more research be done regarding their impact. While my team’s research was for a class project and was conducted on a very small scale, I hope to pursue this research area further during my time as a graduate student. In the future, I would like to focus more specifically on how the effects of results differ depending on the way in which the information is presented to an individual.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Poloroid src='/static/images/ancestry-1.png' caption='Survey Results' />
          </Col>
          <Col md={6}>
            <Poloroid src='/static/images/ancestry-2.png' caption='Survey Results' />
          </Col>
        </Row>
      </div>
    )
  }
}
