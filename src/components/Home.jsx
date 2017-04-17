import React, { Component } from 'react';
import { Link } from 'react-router-dom';  

class Home extends Component {
  render() {
    return (
      <section className="cover cover height-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>
                Github Battle
              </h1>
              <p className="lead">
                Test your skills, battling it out with your fellow githubbers. Prepare for death or glory!
              </p>
              <Link
                to="/playerOne"
                className="btn btn--primary type--uppercase">
                <span className="btn__text">
                  Get started
                </span>
              </Link>
            </div>
            <div className="col-sm-12">
              <div className="triptych border--round">
                <img
                  src="https://unsplash.it/300/?random"
                  alt=""/>
                <img
                  src="https://unsplash.it/300/?random"
                  alt=""/>
                <img
                  src="https://unsplash.it/300/?random"
                  alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
