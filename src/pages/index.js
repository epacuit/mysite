import React from 'react'
import Layout from '../components/layout'
import me4 from '../images/me4.jpg' // Tell Webpack this JS file uses this image
import Announcements from '../components/announcements'
import RecentPublications from '../components/recentpublications'
import '../components/style.scss'

const IndexPage = () => (
  <Layout activePage="home">
    <section style={{ minHeight: '250px' }}>
      <div
        className="tile is-vertical is-ancestor"
        style={{ marginTop: '20px' }}
      >
        <article className="tile is-child notification is-white front-page-tile">
          <span className="media">
            <figure className="media-left" style={{ marginRight: '40px' }}>
              <p className="image is-256x256">
                <img
                  src={me4}
                  style={{ borderRadius: '4px' }}
                  alt="me"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content has-text-left">
                <p className="text is-hidden-mobile">
                  Associate Professor
                  <br />
                  <a
                    href="http://www.philosophy.umd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Department of Philosophy
                  </a>
                  <br />
                  <a
                    href="http://www.umd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Maryland
                  </a>
                  <br />
                  <a href="mailto:epacuit@umd.edu">epacuit@umd.edu</a>
                  <br />
                  Office: 1103A Skinner Hall (directions)
                  <br />
                </p>
              </div>
            </div>
          </span>
        </article>

        <article className="tile is-child notification is-hidden-tablet is-white front-page-tile">
          <p className="text  ">
            Associate Professor
            <br />
            <a href="http://www.philosophy.umd.edu" target="_blank" rel="noopener noreferrer">
              Department of Philosophy
            </a>
            <br />
            <a href="http://www.umd.edu" target="_blank" rel="noopener noreferrer">
              University of Maryland
            </a>
            <br />
            <a href="mailto:epacuit@umd.edu" rel="noopener noreferrer">epacuit@umd.edu</a>
            <br />
            Office: 1103A Skinner Hall (directions)
            <br />
          </p>
        </article>

        <article className="tile is-child notification is-white front-page-tile	front-page-tile ">
          <p>
            <span className="has-text-weight-semibold">Research Interests</span>
            : Logic (especially modal logic), game theory, decision theory,
            social choice theory, formal and social epistemology, philosophy of
            economics, and PPE (philosophy, politics and economics)
          </p>
        </article>

        <div className="tile is-parent is-paddingless is-marginless  front-page-tile">
          <article className="tile is-child notification is-white front-page-tile">
            <h2 className="title">Announcements</h2>
            <Announcements />
          </article>
          <article className="tile is-child notification is-white front-page-tile">
            <h2 className="title">Recent Publications</h2>

            <RecentPublications />
          </article>
        </div>
        <article className="tile is-child notification  is-white front-page-tile">
          <h2 className="title">Short Bio</h2>

          <p className="text  is-marginless ">
            Eric Pacuit is an associate professor in the Department of
            Philosophy at the University of Maryland. Prior to coming to
            Maryland, Eric did his graduate work at the City University of New
            York Graduate Center, and was a postdoctoral researcher at the
            Institute for Logic, Language and Computation at the University of
            Amsterdam and in the Departments of Philosophy and Computer Science
            at Stanford University. Eric’s primary research interests are in
            logic (especially modal logic), game theory, social choice theory,
            and formal and social epistemology. His research has been funded by
            the Natural Science Foundation and a Vidi grant from the Dutch
            science foundation (NWO).
          </p>
        </article>
      </div>
    </section>
  </Layout>
)

export default IndexPage
