import React from 'react'
// import { Row, Col } from 'react-bootstrap'

import Page from './../components/layouts/page.js'
import Header from './../components/sections/header.js'
import About from './../components/sections/about.js'
import NewsConnections from './../components/sections/newsConnections.js'
import KidsTeam from './../components/sections/kidsTeam.js'
import Ancestry from './../components/sections/ancestry.js'
import PersonalProjects from './../components/sections/personalProjects.js'
import Contact from './../components/sections/contact.js'
import RelevantCoursework from './../components/sections/relevantCoursework.js'
import Footer from './../components/sections/footer.js'

export default class extends React.Component {
  render () {
    return (
      <Page>

        <br />
        <Header />

        <About />

        <hr />
        <RelevantCoursework />

        <hr />
        <NewsConnections />

        <hr />
        <KidsTeam />

        <hr />
        <Ancestry />

        <hr />
        <PersonalProjects />

        <hr />
        <Contact />

        <br />
        <br />
        <Footer />

      </Page>
    )
  }
}
