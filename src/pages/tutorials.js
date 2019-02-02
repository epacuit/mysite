import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import '../components/style.scss'
import { graphql } from 'gatsby'

import {
    FaFilePdf,
    FaExternalLinkAlt,
    FaYoutubeSquare,
    
  } from 'react-icons/fa'
  
const TutorialsPage = ({data}) => (
  <Layout activePage="tutorials">
    <section style={{ minHeight: '250px', marginBottom:"100px" }}>
      <div
        className="tile is-vertical is-ancestor"
        style={{ marginTop: '20px' }}
      >
        <article className="tile is-child notification is-white front-page-tile">
          <h1 className="title">Tutorials</h1>
          <p className="text " style = {{marginBottom:"20px"}}>
        Below is a list of notes, interactive tutorials and videos that I have produced for 
        my courses.  Consult my <Link to ="/teaching"> teaching page</Link> for more information.
          </p>
          <ul>
              {data.allTutorialsYaml.edges.map((t,idx) => (
                <li key={idx} style={{marginBottom:"10px"}}><a
                    href={t.node.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon">
                     {t.node.icon === "link" ? <FaExternalLinkAlt />: t.node.icon === "pdf" ? <FaFilePdf /> : <FaYoutubeSquare />}
                    
                    </span>{' '}
                    {t.node.text}
                </a>
                </li>

              ))}

        </ul>

        </article>

      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query TutorialsPageQuery {
    allTutorialsYaml {
      edges {
        node {
          text
          link
          icon
        }
      }
    } 
  }
`

export default TutorialsPage
