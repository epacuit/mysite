import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Markdown from 'react-markdown'
import styled from 'styled-jss'

const Li = styled('li')({
  marginBottom: 15,
})

const Announcements = ({ activePage, children }) => (
  <StaticQuery
    query={graphql`
      query {
        allAnnouncementsYaml(filter: { hide: { eq: false } }) {
          edges {
            node {
              new
              announcement
              weight
              hide
            }
          }
        }
      }
    `}
    render={data => {
      const announcements = data.allAnnouncementsYaml.edges.map((a, idx) => (
        <Li key={idx}>
          {a.node.new ? (
            <span className="tag is-dark" style={{ marginRight: '5px' }}>
              new
            </span>
          ) : (
            ''
          )}
          <Markdown
            renderers={{ paragraph: 'span' }}
            source={a.node.announcement}
          />
        </Li>
      ))
      return <ul>{announcements}</ul>
    }}
  />
)

export default Announcements
