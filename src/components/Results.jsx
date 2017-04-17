import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import api from '../utils/api';
import PlayerPreview from './PlayerPreview';

function Profile( props ) {
  var info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}

function Player( props ) {
  return (
    <div className="col-sm-6" style={{ marginBottom: '60px'}}>
      <div className="row">
        <h1 className='header'>{props.label}</h1>
        <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
        <Profile info={props.profile} />
      </div>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}

class Results extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    var players = queryString.parse( this.props.location.search );
    api
      .battle( [ players.playerOneName, players.playerTwoName ] )
      .then( function( results ) {
        // console.log( results );
        if ( results === null ) {
          return this.setState( function() {
            return {
              error: 'Looks like there was an error. Check that both users exist on Github.',
              loading: false
            }
          } );
        }

        this
          .setState( function() {
            return {
              error: null,
              winner: results[ 0 ],
              loser: results[ 1 ],
              loading: false
            }
          } );
      }.bind( this ) );
  }
  render() {
    var error = this.state.error;
    var winner = this.state.winner;
    var loser = this.state.loser;
    var loading = this.state.loading;

    if ( loading === true ) {
      return (
        <section className="text-center">
          <div className="container">
            <div className="row">
              <p>Loading</p>
            </div>
          </div>
        </section>
      )
    }

    if ( error ) {
      return (
        <section className="text-center">
          <div className="container">
            <div className="row">
              <p>{error}</p>
              <Link to="/battle">Reset</Link>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section className="text-center">
        <div className="container">
          <div className="row">
            <Player
              label="Winner"
              score={winner.score}
              profile={winner.profile}/>
            <Player
              label="Loser"
              score={loser.score}
              profile={loser.profile}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Results;
