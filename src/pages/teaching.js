import React, { Component } from 'react'
import Layout from '../components/layout'
import PreviousCourses from '../components/previousCourseList'
import { graphql, navigate } from 'gatsby'

import '../components/style.scss'
import {
  FaFilePdf,
  FaExternalLinkAlt,
  FaBook,
  
} from 'react-icons/fa'
//const NO_CLASSES_COMMENT = "I'll link to my courses for this semester soon!"
const NO_CLASSES_COMMENT = "I'm on sabbatical, so I am not teaching this semester."
function getCurrentSemesters(year, month) {
  var semesters = new Array()
  if (month >= 7 && month <= 12) {
    semesters = ['Fall ' + year.toString(), 'Spring ' + (year + 1).toString()]
  } else {
    semesters = ['Spring ' + year.toString(), 'Fall ' + (year - 1).toString()]
  }
  return semesters
}
class TeachingPage extends Component {
  constructor(props) {
    super()
    var today = new Date()
    var month = today.getMonth() + 1
    var year = today.getFullYear()
    const currentCourse = props.data.allMarkdownRemark.edges.filter(
      c => c.node.frontmatter.short_name === 'Introduction to Logic'
    )[0]
    const currentIndex = props.data.allMarkdownRemark.edges.indexOf(
      currentCourse
    )
    const numCourses = props.data.allMarkdownRemark.edges.length
    const nextCourse =
      currentIndex < numCourses - 1
        ? props.data.allMarkdownRemark.edges[currentIndex + 1].node.frontmatter
            .short_name
        : null
    const prevCourse =
      currentIndex > 0
        ? props.data.allMarkdownRemark.edges[currentIndex - 1].node.frontmatter
            .short_name
        : null
    this.state = {
      showClassLists: true,
      currentSemesters: getCurrentSemesters(year, month),
      currentCourse: currentCourse,
      nextCourse: nextCourse,
      prevCourse: prevCourse,
    }
    this.handleAllClassesClick = this.handleAllClassesClick.bind(this)
    this.handleLoadClass = this.handleLoadClass.bind(this)
  }

  handleAllClassesClick() {
    this.setState({ showClassLists: true })
  }

  handleLoadClass(courseShortName) {
    const currentCourse = this.props.data.allMarkdownRemark.edges.filter(
      c => c.node.frontmatter.short_name === courseShortName
    )[0]
    const currentIndex = this.props.data.allMarkdownRemark.edges.indexOf(
      currentCourse
    )
    const numCourses = this.props.data.allMarkdownRemark.edges.length
    const nextCourse =
      currentIndex < numCourses - 1
        ? this.props.data.allMarkdownRemark.edges[currentIndex + 1].node
            .frontmatter.short_name
        : null
    const prevCourse =
      currentIndex > 0
        ? this.props.data.allMarkdownRemark.edges[currentIndex - 1].node
            .frontmatter.short_name
        : null
    this.setState({
      showClassLists: false,
      currentCourse: currentCourse,
      nextCourse: nextCourse,
      prevCourse: prevCourse,
    })
  }
  render() {
    const currentCourses = this.state.currentSemesters.map((sem, idx) => (
      <div key={idx}>
        <div style={{ marginBottom: 10 }}>
          <p className="has-text-weight-semibold">{sem}</p>
        </div>
        {this.props.data.allMarkdownRemark.edges.filter((c) => c.node.frontmatter.current_semester === sem).length > 0 ?
        <ul style={{ marginBottom: 30 }}>
          {this.props.data.allMarkdownRemark.edges.filter((c) => c.node.frontmatter.current_semester === sem).map((c,idx2) => (
            <li key={idx2} style={{ marginBottom: 20 }}>
            <div style={{ marginBottom: 5 }}>{c.node.frontmatter.title}</div>
            <div>
              {c.node.frontmatter.syllabus[0].file && <a
                href={c.node.frontmatter.syllabus[0].file.publicURL}
                className="button is-small is-light"
                style={{ marginRight: 20 }}
              >
                <span className="icon is-small">
                  {' '}
                  <FaFilePdf />{' '}
                </span>
                &nbsp;&nbsp;syllabus
              </a>
              }
              {c.node.frontmatter.website[0].www && 
              <a
                href={c.node.frontmatter.website[0].www}
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
              }
              <span onClick={() => navigate(c.node.fields.slug)}className="button is-small is-light">
                <span className="icon is-small">
                  {' '}
                  <FaBook />{' '}
                </span>
                &nbsp;&nbsp;description
              </span>
            </div>{' '}
          </li>

          ))}
        </ul> : 
         <div style={{ marginBottom: 30 }}>{NO_CLASSES_COMMENT}</div>
        }
      </div>
    ))
    const umdCourses = this.props.data.allMarkdownRemark.edges.map((c, idx) => {
      const numCourses = this.props.data.allMarkdownRemark.edges.length
      const nextCourse = idx < numCourses -1 ? this.props.data.allMarkdownRemark.edges[idx+1].node.fields.slug: null
      const prevCourse = idx > 0 ? this.props.data.allMarkdownRemark.edges[idx-1].node.fields.slug: null
      return (
      <li key={idx} style={{ marginBottom: 20 }}>

      <div style={{ marginBottom: 5 }}>
        {c.node.frontmatter.title}
      </div>
      
        <div>
          <span
            onClick={() => navigate(c.node.fields.slug, { state: { nextCourse: nextCourse, prevCourse: prevCourse }})}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-small is-light"
            style={{ marginRight: 20 }}
          >
            <span className="icon is-small">
                  {' '}
                  <FaBook />{' '}
                </span>
                &nbsp;&nbsp;description
              </span>
        </div>
      </li>
    )})
    return (
      <Layout activePage="teaching">
        <section style={{ minHeight: '250px', marginBottom: '150px'}}>
          <div
            className="  tile is-vertical is-ancestor is-parent is-paddingless"
            style={{ marginTop: '20px' }}
          >
            <article
              className={
                this.state.showClassLists
                  ? ' tile is-child is-white front-page-tile is-paddingless'
                  : 'is-hidden tile is-child is-white front-page-tile is-paddingless'
              }
            >
              <h1 className="title">Current Courses</h1>
              {currentCourses}
            </article>
            <article
              className={
                this.state.showClassLists
                  ? ' tile is-child is-white front-page-tile is-paddingless'
                  : 'is-hidden tile is-child is-white front-page-tile is-paddingless'
              }
              style={{ marginTop: '-10' }}
            >
              <h1 className="title is-3">University of Maryland Courses</h1>
              <ul style={{ marginBottom: 20 }}>{umdCourses}</ul>
            </article>
            <article
              className={
                this.state.showClassLists
                  ? ' tile is-child   is-white front-page-tile is-paddingless'
                  : 'is-hidden tile is-child   is-white front-page-tile is-paddingless'
              }
            >
              <h1 className="title">Previous Courses</h1>
              <PreviousCourses />
            </article>

            <div
              className={
                this.state.showClassLists
                  ? 'is-hidden tabs is-fullwidth is-paddingless'
                  : ' tabs is-fullwidth is-paddingless'
              }
             >
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export const query = graphql`
  query TeachingPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/courses/.*.md$/" } }
      sort: {fields: [frontmatter___course_number], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }    
          frontmatter {
            title
            short_name
            course_number
            current_semester
            description
            comment
            website {
              sem
              www
            }
            syllabus {
              sem
              file {
                name
                publicURL
              }
            }
            past_semesters {
              sem
              www
            }
          }
        }
      }
    }
  }
`

export default TeachingPage
