import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

// Stateless functional component
function SelectLanguage( props ) {
  return (
    <section className="elements-title space--xxs text-center">
            <div className="container">
                <div className="row" style={{
                    marginBottom: '30px'
                }}>
                    <div className="col-sm-12">
                        <div className="tabs-container text-center" data-content-align="left">
                            <ul className='tabs'>
                                {props
                                    .languages
                                    .map( function( lang ) {
                                        return (
                                            <li key={lang} onClick={props
                                                .onSelect
                                                .bind( null, lang )} style={lang === props.selectedLanguage
                                                ? {
                                                    backgroundColor: '#eeeeee'
                                                }
                                                : null}>
                                                {lang}
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h6 className="type--uppercase">Selected Language: {props.selectedLanguage}</h6>
                    </div>
                </div>
            </div>
        </section>

  )
}

function RepoGrid( props ) {
  return (
    <section className="text-center">
            <div className="container">
                <div className="row">

                    {props
                        .repos
                        .map( function( repo, index ) {
                            return (
                                <div key={repo.name} className="col-sm-4">
                                    <div className="feature feature-3 boxed boxed--lg boxed--border">
                                        <img className="icon icon--lg icon-Mail-3" style={{
                                            height: '150px',
                                            marginBottom: '30px'
                                        }} src={repo.owner.avatar_url} alt={'Avatar for' + repo.owner.login}/>
                                        <h4>#{index + 1}{'. ' + repo.name}</h4>
                                        <p style={{
                                            minHeight: 'auto'
                                        }}>{repo.stargazers_count + ' Stars'}</p>
                                        <a href={repo.html_url}>
                                            @{repo.owner.login}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}

                </div>
            </div>
        </section>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

// Functional component
class Popular extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this
      .updateLanguage
      .bind( this );
  }
  componentDidMount() {
    this.updateLanguage( this.state.selectedLanguage )
    // api.fetchPopularRepos( this.state.selectedLanguage ).then( function( repos ) {
    //     console.log( repos )
    // })
    // Render the API request to the DOM in the render method using: {JSON.stringify( this.state.repos, null, 2 )}
  }
  updateLanguage( lang ) {
    this
      .setState( function() {
        return {
          selectedLanguage: lang,
          repos: null
        }
      } );
    api
      .fetchPopularRepos( lang )
      .then( function( repos ) {
        this
          .setState( function() {
            return {
              repos: repos
            }
          } )
      }.bind( this ) );
  }
  render() {
    var languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python'
    ];
    return (
      <div>
                <SelectLanguage languages={languages} selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
                  {!this.state.repos
                    ? <div className="radial" data-value="100">
                        <span className="h4 radial__label"></span>
                      </div>
                    : <RepoGrid repos={this.state.repos}/>
                  }
            </div>
    )
  }
}

export default Popular;
