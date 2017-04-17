import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            username: ''
        };
    }
    handleUpdateUser = ( event ) => {
        this.setState({ username: event.target.value })
    }
    handleSubmitUser = ( event ) => {
        event.preventDefault( );
        this.setState({ username: '' })
        if ( this.props.match.params.playerOne ) {
            this
                .props
                .history
                .push({
                    pathname: '/battle/results',
                    search: '?playerOneName=' + this.props.match.params.playerOne + '&playerTwoName=' + this.state.username
                })
        } else {
            this
                .props
                .history
                .push( '/playerTwo/' + this.state.username )
        }
    }
    render( ) {
        // console.log(this.props);
        return ( <Prompt onUpdateUser={this.handleUpdateUser} onSubmitUser={this.handleSubmitUser} header={this.props.header} username={this.state.username}/> )
    }
}

export default PromptContainer;
