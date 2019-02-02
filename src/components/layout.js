import React from 'react';
import './style.scss';
import Helmet from './helmet';
import SideMenu from './sidemenu'
import TopMenu from './topmenu'
import Footer from './footer';

const Layout = ({ activePage, children }) => (
	<>
		<Helmet />
        <div className="is-hidden-desktop">
          <TopMenu activeItem={activePage} />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-3 is-hidden-touch	">
              <SideMenu activeItem={activePage} />
            </div>
            <div className="column">
              <section className="section">
                <div className="site-content">{children}</div>
              </section>
            </div>
          </div>
        </div>
		<Footer />
	</>
);


export default Layout;
