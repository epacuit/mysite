import React from 'react'
import Layout from '../components/layout'
import '../components/style.scss'
import {
  FaExternalLinkAlt,
} from 'react-icons/fa'

import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'


const genAuthorString = (authors) => {
  let authorString = "";
  if(authors != null && authors.length == 1) {
    authorString =  " with " + authors[0]
  }
  else if(authors != null && authors.length == 2) {
    authorString =  " with " + authors.join(" and ")
  }
  else if(authors != null && authors.length > 2) {
    authorString =  " with " + authors.slice(0, -1).join(", ") + " and " + authors[authors.length -1]
  }
  return authorString
}
class Pub extends React.Component {
  constructor(props) {
    super(props)

    this.state = {showAbstract:false};

    this.handleToggleAbstract = this.handleToggleAbstract.bind(this)
  }

  handleToggleAbstract() {
    this.setState({showAbstract:!this.state.showAbstract})
  }
  render() {
    const md = new MarkdownIt({html: true })
    md.use(mk)

    return (
      <div className={this.props.isLast ? "pub-item-last": "pub-item"}>
        <p className="text">
          <span className="pub-title">
            {this.props.file == null ? this.props.title: <a href={this.props.file.publicURL} target="_blank">{this.props.title}</a>}
          </span> ({this.props.year}){genAuthorString(this.props.coauthor)},&nbsp; 
          <span dangerouslySetInnerHTML={{ __html: md.render(this.props.citation).replace('<p>', '<span>').replace('</p>','</span>') }}></span>
          <div style={{marginTop:"5px"}}>
          <a className="button is-light is-small" 
          onClick={this.handleToggleAbstract} style={{width:"105px", height:"27px", marginTop:"2px"}}>
          {this.state.showAbstract ? "Hide" : "Show"} Abstract</a>
          {this.props.publisherlink && <a className="button is-light is-small abstract-button" 
          href={this.props.publisherlink}  target="_blank" style={{width:"75px"}}>
          <span className="icon is-small">
                  {' '}
                  <FaExternalLinkAlt />{' '}
                </span>
                &nbsp;&nbsp;DOI</a>}
          </div>
        </p>
        {this.props.blurb && <p className="text pub-blurb" dangerouslySetInnerHTML={{ __html: md.render(this.props.blurb) }}/>}
        <p className={this.state.showAbstract ? "text abstract": "is-hidden text abstract"} 
           dangerouslySetInnerHTML={{ __html: md.render(this.props.abstract) }} />
      </div>
    )
  }
}

class PublicationsPage extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {showLori:false,
                  showNbhd:false,
                  showJagg:false,
                  showEpgth:false,
                  showAll:true,
                  activeTags:[]};

    this.handleActivateTag = this.handleActivateTag.bind(this)
    this.handleRemoveTag = this.handleRemoveTag.bind(this)
  }

  handleActivateTag(tag) {
    console.log("ACTIVATING")
    console.log(tag)
    let activeTags = this.state.activeTags
    activeTags.push(tag)
    console.log(activeTags)
    this.setState({
      activeTags:activeTags,
      showLori:tag === "lori" ? true: this.state.showLori,
      showNbhd:tag === "nbhd" ? true: this.state.showNbhd,
      showJagg:tag === "judgeagg" ? true: this.state.showJagg,
      showEpgth:tag === "epgth" ? true: this.state.showEpgth   })
  }
  handleRemoveTag(tag) {
    console.log("REMOVING...")
    console.log(tag)
    console.log(tag === "lori")
    let activeTags = this.state.activeTags
    let updatedActiveTags = activeTags.filter((t) => t != tag)
    //console.log(activeTags)
    this.setState({
      activeTags:updatedActiveTags,
      showLori:tag === "lori" ? false: this.state.showLori,
      showNbhd:tag === "nbhd" ? false: this.state.showNbhd,
      showJagg:tag === "judgeagg"  ? false: this.state.showJagg,
      showEpgth:tag === "epgth"  ? false: this.state.showEpgth   })
  }

  render() {
    const allPubs = this.props.data.allMarkdownRemark.edges
    const isActive = (activeTags, pubTags) => {return(activeTags.length === 0 || pubTags.filter(t => -1 !== activeTags.indexOf(t)).length > 0)};
    const books = allPubs.filter( p => p.node.frontmatter.type === "book" && isActive(this.state.activeTags, p.node.frontmatter.tags))
    const bookList = books.map((p,idx) => {console.log(idx); 
      const isLast = idx == books.length - 1
      return(<Pub
                key = {idx}
                title={p.node.frontmatter.title}
                year = {p.node.frontmatter.year}
                citation = {p.node.frontmatter.citation}
                coauthor = {p.node.frontmatter.coauthor}
                abstract = {p.node.frontmatter.abstract}
                blurb = {p.node.frontmatter.blurb}
                file = {p.node.frontmatter.file}
                publisherlink = {p.node.frontmatter.publisherlink}
                isLast = {isLast}
              />)})

    const articles = allPubs.filter( p => p.node.frontmatter.type === "journal" &&  isActive(this.state.activeTags, p.node.frontmatter.tags))
    const articleList = articles.map((p,idx) => { 
      const isLast = idx == articles.length - 1
      return(<Pub
                key = {idx}
                title={p.node.frontmatter.title}
                year = {p.node.frontmatter.year}
                citation = {p.node.frontmatter.citation}
                coauthor = {p.node.frontmatter.coauthor}
                abstract = {p.node.frontmatter.abstract}
                blurb = {p.node.frontmatter.blurb}
                file = {p.node.frontmatter.file}
                publisherlink = {p.node.frontmatter.publisherlink}
                isLast = {isLast}
              />)})

    const chapters = allPubs.filter( p => p.node.frontmatter.type === "chapter" && isActive(this.state.activeTags, p.node.frontmatter.tags))
    const chapterList = chapters.map((p,idx) => { 
      const isLast = idx == chapters.length - 1
      return(<Pub
                key = {idx}
                title={p.node.frontmatter.title}
                year = {p.node.frontmatter.year}
                citation = {p.node.frontmatter.citation}
                coauthor = {p.node.frontmatter.coauthor}
                abstract = {p.node.frontmatter.abstract}
                blurb = {p.node.frontmatter.blurb}
                file = {p.node.frontmatter.file}
                publisherlink = {p.node.frontmatter.publisherlink}
                isLast = {isLast}
              />)})

    const proceedings = allPubs.filter( p => p.node.frontmatter.type === "proceedings" && isActive(this.state.activeTags, p.node.frontmatter.tags))
    const proceedingsList = proceedings.map((p,idx) => { 
      const isLast = idx == proceedings.length - 1
      return(<Pub
                key = {idx}
                title={p.node.frontmatter.title}
                year = {p.node.frontmatter.year}
                citation = {p.node.frontmatter.citation}
                coauthor = {p.node.frontmatter.coauthor}
                abstract = {p.node.frontmatter.abstract}
                blurb = {p.node.frontmatter.blurb}
                file = {p.node.frontmatter.file}
                publisherlink = {p.node.frontmatter.publisherlink}
                isLast = {isLast}
              />)})

    const encyclopedias = allPubs.filter( p => p.node.frontmatter.type === "encyclopedia" && isActive(this.state.activeTags, p.node.frontmatter.tags))
    const encyclopediaList = encyclopedias.map((p,idx) => { 
      const isLast = idx == encyclopedias.length - 1
      return(<Pub
                key = {idx}
                title={p.node.frontmatter.title}
                year = {p.node.frontmatter.year}
                citation = {p.node.frontmatter.citation}
                coauthor = {p.node.frontmatter.coauthor}
                abstract = {p.node.frontmatter.abstract}
                blurb = {p.node.frontmatter.blurb}
                file = {p.node.frontmatter.file}
                publisherlink = {p.node.frontmatter.publisherlink}
                isLast = {isLast}
              />)})

                                                
    return (<Layout activePage="publications">
    <section style={{ minHeight: '250px', marginBottom:"100px"}}>
      <div
        className="tile is-vertical is-ancestor"
        style={{ marginTop: '20px' }}
      >
        <article className="tile is-child notification is-white front-page-tile is-vertical " >
          <h1 className="title" >Publications</h1>

          <p className="text " style = {{marginBottom:"-5px"}}>
          My research can be roughly divided into four main projects: (i) logics of rational interaction, 
          (ii) epistemic foundations of game theory, (iii) judgement aggregation and voting, and 
          (iv)  modal logic.  You can filter my papers using these categories by 
          selecting the buttons below.   


          </p>
 
        </article>
        <div className="buttons " style={{paddingLeft:"1.5rem"}}>
            <span className={this.state.showLori ? "button  is-link is-active ":"button  is-link is-outlined "}  onClick={this.state.showLori ? ()=> this.handleRemoveTag("lori"): ()=>this.handleActivateTag("lori")}>logics of rational interaction</span>
            <span className={this.state.showEpgth ? "button  is-link is-active ":"button  is-link is-outlined "} onClick={this.state.showEpgth ? ()=> this.handleRemoveTag("epgth"): ()=>this.handleActivateTag("epgth")}>epistemic foundations of game theory</span>
            <span className={this.state.showJagg ? "button  is-link is-active ":"button  is-link is-outlined "} onClick={this.state.showJagg ? ()=> this.handleRemoveTag("judgeagg"): ()=>this.handleActivateTag("judgeagg")}>judgement aggregate and voting</span>
            <span className={this.state.showNbhd ? "button  is-link is-active ":"button  is-link is-outlined "} onClick={this.state.showNbhd ? ()=> this.handleRemoveTag("nbhd"): ()=>this.handleActivateTag("nbhd")}>neighborhood semantics for modal logic</span>
            
          </div>

        {bookList.length > 0 && <article className="tile is-child notification is-white   is-vertical is-marginless" style={{paddingBottom:"0px"}}>
          <h2 className="title" style= {{paddingBottom:"0.25rem"}}>Books</h2>
            {bookList}
        </article>}
        {articleList.length > 0 && <article className="tile is-child notification is-white   is-vertical is-marginless" style={{paddingBottom:"0px"}}>
          <h2 className="title" style= {{paddingBottom:"0.25rem"}}>Journal Articles</h2>
             {articleList}
        </article>}
        {chapterList.length > 0 && <article className="tile is-child notification is-white   is-vertical is-marginless" style={{paddingBottom:"0px"}}>
          <h2 className="title" style= {{paddingBottom:"0.25rem"}}>Book Chapters</h2>
             {chapterList}
        </article>}
        {proceedingsList.length > 0 && <article className="tile is-child notification is-white   is-vertical is-marginless" style={{paddingBottom:"0px"}}>
          <h2 className="title" style= {{paddingBottom:"0.25rem"}}>Conference Proceedings (Peer Reviewed)</h2>
             {proceedingsList}
        </article>}
        {encyclopediaList.length > 0 && <article className="tile is-child notification is-white   is-vertical is-marginless" style={{paddingBottom:"0px"}}>
          <h2 className="title" style= {{paddingBottom:"0.25rem"}}>Encyclopedia Entries</h2>
             {encyclopediaList}
        </article>}
      </div>
    </section>
  </Layout>
)
}
}
export const query = graphql`
  query PublicationsPageQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/publications/.*.md$/"}}, sort: {fields: [frontmatter___year], order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          type
          coauthor
          year
          citation
          publisherlink
          tags
          file {
            name
            publicURL
          }
          blurb
          abstract
        }
      }
    }
  }
}
`

export default PublicationsPage
