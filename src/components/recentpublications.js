import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Markdown from 'react-markdown'
import styled from 'styled-jss'
import {
  FaFilePdf,
  FaBook,
  FaEdit
} from 'react-icons/fa'

const Li = styled('li')({
  marginBottom: 25,
})

const RecentPublications = ({ activePage, children }) => (
  <StaticQuery
    query={graphql`
      query {
        published: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/publications/.*.md$/"}, frontmatter: { front_page: { eq: true } } }, sort: {fields: [frontmatter___year], order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                publisherlink
                file {
                  publicURL
                }
                frontpage_data {
                  icon
                  short_blurb
                  use_publisher_link
                } 
              }
            }
          }
        }
        manuscripts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/manuscripts/.*.md$/"},  frontmatter: { front_page: { eq: true } }}, sort: {fields: [frontmatter___year], order: DESC}) {
          edges {
            node {
              frontmatter {
                front_page 
                frontpage_info {
                  name
                  file{
                    publicURL
                  }
                } 
              }
            }
          }
        }
    }      
    `}
    render={data => {
      const published = data.published.edges.map((p, idx) => {
        const frontPageData = p.node.frontmatter.frontpage_data[0]
        const icon = frontPageData.icon == "pdf" ? <FaFilePdf /> : <FaBook />
        return (
        <li key={idx} style={{marginBottom:"15px"}}>
        <span className="icon " style={{color:"#505050"}}>
          {icon}
      </span>&nbsp;
          <a href={frontPageData.use_publisher_link  ? p.node.frontmatter.publisherlink: p.node.frontmatter.file.publicURL} rel="noopener noreferrer" target="_blank">
      {p.node.frontmatter.title}</a>&nbsp; {frontPageData.short_blurb && <Markdown
            renderers={{ paragraph: 'span' }}
            source={frontPageData.short_blurb}
      />}
        </li>
        )})

      const manuscripts = data.manuscripts.edges.map((m, idx) => {
          const frontPageData = m.node.frontmatter.frontpage_info[0]
   
          return (
          <li key={idx} style={{marginBottom:"15px"}}>
          <span className="icon " style={{color:"#505050"}}>
            <FaEdit />
        </span>&nbsp;
            <a href={frontPageData.file.publicURL} rel="noopener noreferrer" target="_blank">
        {frontPageData.name}</a>&nbsp; (draft)
          </li>
          )})
  
      return <ul> {published} {manuscripts}</ul>
    }}
  />
)

export default RecentPublications
