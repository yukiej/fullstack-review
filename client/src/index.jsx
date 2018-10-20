import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    let url = 'http://localhost:1128/repos';

    let request = $.ajax({
      url: url,
      method: 'GET',
      data: {term: term}
    });

    request.done(function(msg) {
      console.log(`${msg} sent!`)
    })

    request.fail(function(textStatus) {
      console.log(`Request failed: ${textStatus}`);
    })

    console.log(`${term} was searched`);
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));