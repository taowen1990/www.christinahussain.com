import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Poloroid from './../images/poloroid'

export default class extends React.Component {
  render () {
    return (
      <div id='personalProjects'>
        <Row>
          <Col md={12}>
            <h2>Personal Projects</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Poloroid src='/static/images/scoreboardguru.png' caption='Scoreboard Guru App' />
          </Col>

          <Col md={8}>
            <h3>Scoreboard Guru</h3>
            <p>My partner and I love playing card games, especially when traveling.  We wanted a better tool for keeping track of the scores and locations of the games we were playing... enter the Scoreboard app! We designed the app to allow users to keep score during games, track and chart previous scoring data, as well as capture a photo and location for each game play,  We loved using the app and captured our card game scores in nearly 10 countries!</p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Poloroid src='/static/images/starteam.jpg' caption='StarTeam: Coming soon!' />
          </Col>

          <Col md={8}>
            <h3>Star Team: Adventures in Space Recruiting</h3>
            <p>It has always been my dream to make my own board or card game... and I (along with my partner) am currently in the process of making that dream a reality! We have designed the game mechanics and theming for a 2-3 person card game (in the vein of an advanced gin rummy) and are currently in the final stages of producing our cards and instructions. In March, we will be hosting user testing sessions (with drinks and snacks!)... let me know if you'd like to join one!</p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Poloroid src='/static/images/travel.jpg' caption='Travel can be Delicious' />
          </Col>

          <Col md={8}>
            <h3>Travel, Adventure, and Food Reaserch and Recommendations</h3>
            <p>My great loves are travel, food, and adventure... and I know that in order to have the best experiences possible in those categories, it's usually going to take a good amount of research and digging.  I spend countless hours reading through blogs, articles, and review sites, gathering useful nuggets of information. Then, I take everything I learn and go and have amazing experiences (and share what I learned with my friends and colleagues). If you need ideas for a date night in Seattle or recommendations for lodgings in the Scottish Highlands... I'd love to help!</p>
          </Col>
        </Row>
      </div>
    )
  }
}
