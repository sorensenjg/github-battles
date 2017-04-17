import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview( props ) {
  return (
    <div className="col-xs-12">
      <div className="feature feature-3 boxed boxed--lg boxed--border">
        <img className="icon icon--lg icon-Mail-3" style={{
          height: '150px',
          marginBottom: '30px',
          borderRadius: '100%'
        }} src={props.avatar} alt={'Avatar for' + props.username}/>
        <h4>@{props.username}</h4>
        {props.children}
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default PlayerPreview;
