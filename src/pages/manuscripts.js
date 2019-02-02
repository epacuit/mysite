import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import '../components/style.scss'
import {
  FaFilePdf,
} from 'react-icons/fa'

const WorkInProgressPage = ({data}) => {
  const wipItems = data.allMarkdownRemark.edges.map((wip,idx) => {
    const writings = wip.node.frontmatter.writings != null ? wip.node.frontmatter.writings.map((w,idx2) => (
      <li key={idx2} style={{marginBottom:"5px"}}> <a href={w.file.publicURL} rel="noopener noreferrer" target="_blank">
      <span className="icon ">
          <FaFilePdf />
      </span>&nbsp;{w.name}</a>{w.comment && <span>, {w.comment}</span>}
      </li>
    )): null;
    return(
      <div key={idx} style={{marginBottom:"30px"}}>
      <p className="text" style={{fontSize:"120%",paddingBottom:"10px"}}>{wip.node.frontmatter.title}</p>
      {wip.node.frontmatter.blurb && <p className="text" style={{marginBottom:writings != null? "10px": "0px"}}>{wip.node.frontmatter.blurb} 
      </p>}
      {writings != null && 
      <ul>
        {writings}
      </ul>}
      </div>
    )
  })
  return(
  <Layout activePage="wip">
    {console.log(data)}
    <section style={{ minHeight: '300px', marginBottom:"100px" }}>
      <div
        className="tile is-vertical is-ancestor"
        style={{ marginTop: '20px' }}
      >
        <article className="tile is-child notification is-white front-page-tile">
          <h1 className="title">Work in Progress</h1>
          <p className="text " style = {{marginBottom:"20px"}}>
        This page contains my papers that are currently in progress. 
        Links to working drafts of the papers or slides from talks based on the paper 
        are provided when available. 
        For more information about my research, you can view my <Link to="/publications">publications page</Link>.
          </p>
          {wipItems}
        </article>

      </div>
    </section>
  </Layout>
)}

export const query = graphql`
  query ManuscriptsPageQuery {

  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/manuscripts/.*.md$/"}}, sort: {fields: [frontmatter___order], order: ASC}) {
    edges {
      node {
        frontmatter {
					title
          order
          blurb
          writings {
            file {
              publicURL
            }
            name
            comment
          }
        }
      }
    }
  }
}
`


export default WorkInProgressPage
