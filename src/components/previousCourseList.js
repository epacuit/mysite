import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-jss'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Li = styled('li')({
  marginBottom: 15,
  marginLeft: 15,
})

const Ul = styled('ul')({
  marginBottom: 20,
})

function courseList(schoolData) {
  return schoolData.map((course, idx) => (
    <Li key={idx}>
      <div style={course.node.website !== null && { marginBottom: 5 }}>
        {course.node.description}
      </div>
      {course.node.website !== '' && (
        <div>
          <a
            href={course.node.website}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-small is-light"
            style={{ marginRight: 20 }}
          >
            <span className="icon is-small">
              {' '}
              <FaExternalLinkAlt />{' '}
            </span>
            &nbsp;&nbsp;website
          </a>
        </div>
      )}
    </Li>
  ))
}

const PreviousCourses = ({ activePage, children }) => (
  <StaticQuery
    query={graphql`
      query {
        allPastCoursesCsv {
          edges {
            node {
              description
              semester
              website
              school
            }
          }
        }
      }
    `}
    render={data => {
      const schools = [
        'Carnegie Mellon University',
        'Tilburg University',
        'Stanford University',
        'Institute for Logic, Language and Computation, University of Amsterdam',
        'Brooklyn College',
        'New York University',
        'Case Western Reserve University',
      ]

      const schoolList = schools.map((school, idx) => (
        <div key={idx}>
          <div
            className="has-text-weight-semibold"
            style={{ marginBottom: 10 }}
          >
            {school}
          </div>
          <Ul>
            {courseList(
              data.allPastCoursesCsv.edges.filter(c => c.node.school === school)
            )}
          </Ul>
        </div>
      ))
      return <>{schoolList}</>
    }}
  />
)

export default PreviousCourses
