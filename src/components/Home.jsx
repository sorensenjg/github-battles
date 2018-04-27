import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: "All",
            repos: null
        };
    }
    componentDidMount() {
        api.fetchPopularRepos(this.state.selectedLanguage).then(
            function(repos) {
                this.setState(function() {
                    return {
                        repos: repos
                    };
                });
            }.bind(this)
        );
    }
    render() {
        return (
            <section className="cover cover height-100 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <h1>Github Battle - Feature/Login</h1>
                            <p className="lead">Test your skills, battling it out with your fellow githubbers. Prepare for death or glory!</p>
                            <Link to="/playerOne" className="btn btn--primary type--uppercase">
                                <span className="btn__text">Get started</span>
                            </Link>
                        </div>
                        <div className="col-sm-8 col-sm-offset-2">
                            {!this.state.repos ? (
                                <div className="radial" data-value="100">
                                    <span className="h4 radial__label" />
                                </div>
                            ) : (
                                <div className="triptych border--round">
                                    {shuffle(this.state.repos)
                                        .slice(0, 3)
                                        .map(function(repo, index) {
                                            return <img key={repo.name} src={repo.owner.avatar_url} alt={"Avatar for" + repo.owner.login} style={{ backgroundColor: "#ffffff" }} />;
                                        })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
