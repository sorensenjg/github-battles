import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OhShit extends Component {
    render( ) {
        return (
          <section className="height-100 bg--dark text-center">
            <div className="container pos-vertical-center">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="h1--large">404</h1>
                  <p className="lead">
                    The page you were looking for "{location.pathname}" doesn't appear to exist.
                  </p>
                  <Link to="/">
                    Go back to home page
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default OhShit;
