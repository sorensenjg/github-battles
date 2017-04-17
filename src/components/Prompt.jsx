import React from 'react';
import PropTypes from 'prop-types';

function Prompt(props) {
    return (
        <section className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                            {props.header}
                        </h1>
                        <p className="lead">
                            Please enter {props.header + "'s "}
                            github username.
                        </p>
                        <div className="row">
                            <form onSubmit={props.onSubmitUser}>
                                <div className="col-sm-5 col-sm-offset-1 col-md-3 col-md-offset-3">
                                    <input type="text" placeholder="Github Username" onChange={props.onUpdateUser} value={props.username}/>
                                </div>
                                <div className="col-sm-5 col-md-3">
                                    <button type="submit" className="btn btn--primary type--uppercase">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Prompt.propTypes = {
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default Prompt;
