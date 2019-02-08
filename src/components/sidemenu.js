import React from 'react'
import { Link } from 'gatsby'

const SideMenu = ({ activeItem }) => (
  <section className="section">
    <h1 className="title" style={{ marginTop: '20px' }}>
      Eric Pacuit
    </h1>
    <aside className="menu" style={{ fontSize: '1.2rem' }}>
      <ul className="menu-list">
        <li>
          <Link to="/" className={activeItem === 'home' ? 'is-active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/publications"
            className={activeItem === 'publications' ? 'is-active' : ''}
          >
            Publications
          </Link>
        </li>
        <li>
          <Link
            to="/manuscripts"
            className={activeItem === 'wip' ? 'is-active' : ''}
          >
            Work in Progress
          </Link>
        </li>
        <li>
          <Link
            to="/teaching"
            className={activeItem === 'teaching' ? 'is-active' : ''}
          >
            Teaching
          </Link>
          <ul>
            <li>
              <a 
                href="http://app.pacuit.io/esslli"
                className={activeItem === 'short' ? 'is-active' : ''}
              >
                Short Courses
              </a>
            </li>
            <li>
              <Link
                to="/tutorials"
                className={activeItem === 'tutorials' ? 'is-active' : ''}
              >
                Tutorials
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="http://docs.pacuit.io/pacuit-cv.pdf"
            className={activeItem === 'cv' ? 'is-active' : ''}
            target = "_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </aside>
  </section>
)

export default SideMenu
