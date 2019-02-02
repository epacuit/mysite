import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Link } from "gatsby"

import '../components/style.scss'
import {
  FaFilePdf,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaExternalLinkAlt,
} from 'react-icons/fa'

class CoursePage extends React.Component {

  componentDidMount() {
    const nextCourse = this.props.location.state.nextCourse
    this.setState({
      nextCourse: nextCourse
    })
  }
  
  render() {
    console.log(this.props.location.pathname)
    console.log(this.props.data.allMarkdownRemark)
    console.log(this.props.data.allMarkdownRemark.edges.filter(
      c => c.node.fields.slug === this.props.location.pathname
    ))
    //const courseData = this.props.data.markdownRemark
    //console.log(courseData)
    const currentCourse = this.props.data.allMarkdownRemark.edges.filter(
      c => c.node.fields.slug === this.props.location.pathname
    )[0]
    const currentIndex = this.props.data.allMarkdownRemark.edges.indexOf(
      currentCourse
    )
    console.log(currentCourse)
    const courseData = currentCourse.node
    const numCourses = this.props.data.allMarkdownRemark.edges.length
    const nextCourseSlug = currentIndex < numCourses - 1 ? this.props.data.allMarkdownRemark.edges[currentIndex+1].node.fields.slug: null
    const prevCourseSlug = currentIndex > 0 ? this.props.data.allMarkdownRemark.edges[currentIndex-1].node.fields.slug: null
    const nextCourseShortName = currentIndex < numCourses - 1 ? this.props.data.allMarkdownRemark.edges[currentIndex+1].node.frontmatter.short_name: null
    const prevCourseShortName = currentIndex > 0 ? this.props.data.allMarkdownRemark.edges[currentIndex-1].node.frontmatter.short_name: null

    console.log(nextCourseSlug)
    console.log(nextCourseShortName)


    return (<Layout >
      <section style={{ minHeight: '250px', marginBottom: '250px'}}>
      <article
              className={'tile is-child notification is-white front-page-tile is-paddingless'}
              style={{ marginBottom:100 }}>
              <h1 className="title" style={{marginTop:"20px"}}>
                {courseData.frontmatter.title}
              </h1>
              <p className="subtitle">
                {courseData.frontmatter.course_number},
                University of Maryland
              </p>
              <p className="text">
                {courseData.frontmatter.description}
              </p>
              <p
                className="text"
                style={{ marginTop: '15px', marginBottom: '15px' }}
              >
                {courseData.frontmatter.comment}
              </p>

              <ul>
                {courseData.frontmatter.syllabus[0].file && (
                  <li style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <a
                      href={
                        courseData.frontmatter.syllabus[0]
                          .file.publicURL
                      }
                    >
                      {' '}
                      <span className="icon">
                        <FaFilePdf />
                      </span>{' '}
                      Syllabus (
                      {
                        courseData.frontmatter.syllabus[0]
                          .sem
                      }
                      ){' '}
                    </a>
                  </li>
                )}
                {courseData.frontmatter.website[0].www && <li style={{ marginBottom: '15px' }}>
                  <a
                    href={
                      courseData.frontmatter.website[0].www
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <FaExternalLinkAlt />
                    </span>{' '}
                    Course Website (
                    {courseData.frontmatter.website[0].sem})
                  </a>
                </li>}
              </ul>

              {courseData.frontmatter.past_semesters && (
                <p className="text">
                  Pervious Versions:{' '}
                  {courseData.frontmatter.past_semesters.map(
                    (pastSem, idx) => (
                      <a
                        key={idx}
                        href={pastSem.www}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: 15 }}
                      >
                        {pastSem.sem}
                      </a>
                    )
                  )}
                </p>
              )}
            </article>
            <hr></hr>
            <article style={{marginTop:"10px"}}> 
            {prevCourseSlug && <Link to = {prevCourseSlug}>
                      {' '}
                      <span className="icon">
                        <FaArrowLeft />  
                      </span>{' '}
                      Previous course:&nbsp;&nbsp;
                      {prevCourseShortName}
                      {' '}
            </Link>} 

            </article>
            <article style={{marginTop:"10px"}}>
            <Link to = {'/teaching'}>
            <span className="icon">
                        <FaArrowUp />
                      </span>{' '}All courses 
                      {' '}
            </Link>
            </article>

            <article style={{marginTop:"10px"}}>
            {nextCourseSlug  && <Link to = {nextCourseSlug}>
            <span className="icon">
                        <FaArrowRight />
                      </span>{' '}Next course: &nbsp;&nbsp;
                      {nextCourseShortName}
                      {' '}
            </Link>}

            </article>

      </section>
    </Layout>)
  }
}                    
export const query = graphql`
query CoursePageQuery {
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

export default CoursePage

