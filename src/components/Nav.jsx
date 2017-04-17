import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav( props ) {
  return (
    <div className="nav-container">
      <nav
        id="menu-bar"
        className="bar bar--sm bar-1">
        <div className="container">
          <div className="row">
            <div className="col-xs-1">
              <div className="bar__module">
                <a href="index.html">
                  <img
                    className="logo logo-dark"
                    alt="logo"
                    src={props.logo} />
                  <img
                    className="logo logo-light"
                    alt="logo"
                    src={props.logo} />
                </a>
              </div>
            </div>
            <div className="col-md-10 col-xs-12 text-center">
              <div className="bar__module">
                <ul className="menu-horizontal text-left">
                  <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/battle">Battle</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/popular">Popular</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

module.exports = Nav;
