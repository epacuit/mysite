import React, { Component } from 'react'
import { Link } from 'gatsby'

class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleClick = this.handleClick.bind(this)
  }
  // function to handle the click
  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="title" style={{ paddingLeft: '1.5rem' }}>
              Eric Pacuit
            </h1>
          </a>

          <a
            role="button"
            className={
              this.state.showMenu ? 'navbar-burger is-active' : 'navbar-burger'
            }
            onClick={this.handleClick}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={
            this.state.showMenu ? 'navbar-menu is-active' : 'navbar-menu'
          }
          style={{ paddingLeft: '25px' }}
        >
          <div className="navbar-end">
            <Link
              to="/"
              className={
                this.props.activeItem === 'home'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Home
            </Link>

            <Link
              to="/publications"
              className={
                this.props.activeItem === 'publications'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Publications
            </Link>
            <Link
              to="/manuscripts"
              className={
                this.props.activeItem === 'wip'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Work in Progress
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link
                to="/teaching"
                className={
                  this.props.activeItem === 'teaching'
                    ? 'navbar-item is-active'
                    : 'navbar-item'
                }
              >
                Teaching
              </Link>

              <div className="navbar-dropdown">
                <a
                  href = "http://app.pacuit.org/esslli"
                  className={
                    this.props.activeItem === 'shortcourses'
                      ? 'navbar-item is-active'
                      : 'navbar-item'
                  }
                >
                  Short Courses
                </a>
                <Link
                  to="/tutorials"
                  className={
                    this.props.activeItem === 'tutorials'
                      ? 'navbar-item is-active'
                      : 'navbar-item'
                  }
                >
                  Tutorials
                </Link>
              </div>
            </div>
            <Link
              to="http://docs.pacuit.org/pacuit-cv.pdf"
              className={
                this.props.activeItem === 'cv'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              CV
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopMenu
