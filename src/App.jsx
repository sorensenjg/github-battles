import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';
import Results from './components/Results';
import PromptContainer from './containers/PromptContainer';
import Popular from './components/Popular';

import logo from './logo.svg';
import './App.css';
import './assets/css/theme.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Nav logo={logo}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path='/playerOne' render={(props) => <PromptContainer header={"Player One"} {...props}/>}/>
                        <Route path='/playerTwo/:playerOne' render={(props) => <PromptContainer header={"Player Two"} {...props}/>}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/battle/results" component={Results}/>
                        <Route path="/popular" component={Popular}/>
                        <Route render={function() {
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
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
