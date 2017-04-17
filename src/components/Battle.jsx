import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';

class PlayerInput extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      username: ''
    }

    this.handleChange = this
      .handleChange
      .bind( this );
    this.handleSubmit = this
      .handleSubmit
      .bind( this );
  }
  handleChange( event ) {
    var value = event.target.value;

    this.setState( function() {
      return {
        username: value
      }
    } );
  }
  handleSubmit( event ) {
    event.preventDefault();

    this
      .props
      .onSubmit( this.props.id, this.state.username )
  }
  render() {
    return (
      <div
        className="col-sm-6"
        style={{
          marginBottom: '60px'
        }}>
        <p className="lead">
          Please enter {this.props.player + "'s "}
          github username.
        </p>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="col-xs-6">
              <input
                id="username"
                type="text"
                placeholder="Github Username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}/>
            </div>
            <div className="col-xs-6">
              <button
                type="submit"
                className="btn btn--primary type--uppercase"
                disabled={!this.state.username}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this
      .handleSubmit
      .bind( this );
    this.handleReset = this
      .handleReset
      .bind( this );
  }
  handleSubmit( id, username ) {
    this
      .setState( function() {
        var newState = {};
        newState[ id + 'Name' ] = username;
        newState[ id + 'Image' ] = 'https://github.com/' + username + '.png?size=200';
        return newState;
      } );
  }
  handleReset( id ) {
    this
      .setState( function() {
        var newState = {};
        newState[ id + 'Name' ] = '';
        newState[ id + 'Image' ] = null;
        return newState;
      } );
  }
  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;
    return (
      <section className="text-center">
        <div className="container">
          <div className="row">
            {!playerOneName &&
              <PlayerInput
                id="playerOne"
                player="Player One"
                onSubmit={this.handleSubmit}/>
            }
            {playerOneImage !== null &&
              <div className="col-sm-6" style={{ marginBottom: '60px'}}>
                <div className="row">
                  <PlayerPreview
                    username={playerOneName}
                    avatar={playerOneImage}>
                    <span
                      style={{
                        minHeight: '0',
                        cursor: 'pointer'
                      }}
                      onClick={this.handleReset
                        .bind( null, 'playerOne' )}>Reset</span>
                    </PlayerPreview>
                  </div>
                </div>
              }

              {!playerTwoName &&
                <PlayerInput
                  id="playerTwo"
                  player="Player Two"
                  onSubmit={this.handleSubmit}/>
              }
              {playerTwoImage !== null &&
                <div className="col-sm-6" style={{ marginBottom: '60px'}}>
                  <div className="row">
                    <PlayerPreview
                      username={playerTwoName}
                      avatar={playerTwoImage}>
                      <span
                        style={{
                          minHeight: '0',
                          cursor: 'pointer'
                        }}
                        onClick={this.handleReset
                          .bind( null, 'playerTwo' )}>Reset</span>
                      </PlayerPreview>
                    </div>
                  </div>
                }

                {playerOneImage && playerTwoImage &&
                  <Link
                    className="btn btn--primary btn--lg"
                    style={{
                      color: '#ffffff'
                    }}
                    to={{
                      pathname: match.url + '/results',
                      search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                    }}>
                    <span className="btn__text">Battle!</span>
                </Link>
              }
            </div>
          </div>
        </section>
    )
  }
}

export default Battle;
