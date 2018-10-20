import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos:  [ { _id: 6856837,
    repo_name: 'javascript_koans',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 336,
    url: 'git://github.com/hackreactor/javascript_koans.git',
    __v: 0 },
  { _id: 22186036,
    repo_name: 'giraffeMaker',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 290,
    url: 'git://github.com/hackreactor/giraffeMaker.git',
    __v: 0 },
  { _id: 12123561,
    repo_name: 'underscore',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 75,
    url: 'git://github.com/hackreactor/underscore.git',
    __v: 0 },
  { _id: 60550958,
    repo_name: 'reactorprep-starter',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 56,
    url: 'git://github.com/hackreactor/reactorprep-starter.git',
    __v: 0 },
  { _id: 52110598,
    repo_name: 'intro-coding',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 53,
    url: 'git://github.com/hackreactor/intro-coding.git',
    __v: 0 },
  { _id: 20243956,
    repo_name: 'jsconf2014',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 47,
    url: 'git://github.com/hackreactor/jsconf2014.git',
    __v: 0 },
  { _id: 10365286,
    repo_name: 'jsconf2013-data-structures',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 45,
    url: 'git://github.com/hackreactor/jsconf2013-data-structures.git',
    __v: 0 },
  { _id: 14164109,
    repo_name: 'angular.js',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 38,
    url: 'git://github.com/hackreactor/angular.js.git',
    __v: 0 },
  { _id: 22266364,
    repo_name: 'generator-test',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 37,
    url: 'git://github.com/hackreactor/generator-test.git',
    __v: 0 },
  { _id: 14127320,
    repo_name: 'mocha',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 36,
    url: 'git://github.com/hackreactor/mocha.git',
    __v: 0 },
  { _id: 144873541,
    repo_name: 'masters-full-stack',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 32,
    url: 'git://github.com/hackreactor/masters-full-stack.git',
    __v: 0 },
  { _id: 14603945,
    repo_name: 'wellTested',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 31,
    url: 'git://github.com/hackreactor/wellTested.git',
    __v: 0 },
  { _id: 9782076,
    repo_name: 'stocktwits-widgets',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 22,
    url: 'git://github.com/hackreactor/stocktwits-widgets.git',
    __v: 0 },
  { _id: 9782196,
    repo_name: 'divcage',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 18,
    url: 'git://github.com/hackreactor/divcage.git',
    __v: 0 },
  { _id: 61572358,
    repo_name: 'circuit-sandbox',
    owner_name: 'willymcallister',
    owner_id: 17035787,
    forks: 14,
    url: 'git://github.com/willymcallister/circuit-sandbox.git',
    __v: 0 },
  { _id: 141732870,
    repo_name: 'CRUDite',
    owner_name: 'hackreactor',
    owner_id: 2824164,
    forks: 11,
    url: 'git://github.com/hackreactor/CRUDite.git',
    __v: 0 },
  { _id: 57170290,
    repo_name: 'react-chess',
    owner_name: 'ryanheathers',
    owner_id: 992088,
    forks: 2,
    url: 'git://github.com/ryanheathers/react-chess.git',
    __v: 0 },
  { _id: 85897123,
    repo_name: 'babylon-mode',
    owner_name: 'xymostech',
    owner_id: 217900,
    forks: 1,
    url: 'git://github.com/xymostech/babylon-mode.git',
    __v: 0 },
  { _id: 4164428,
    repo_name: 'dyload',
    owner_name: 'xymostech',
    owner_id: 217900,
    forks: 1,
    url: 'git://github.com/xymostech/dyload.git',
    __v: 0 },
  { _id: 45262550,
    repo_name: 'bitmap-transformer',
    owner_name: 'ryanheathers',
    owner_id: 992088,
    forks: 1,
    url: 'git://github.com/ryanheathers/bitmap-transformer.git',
    __v: 0 },
  { _id: 55037890,
    repo_name: 'cracking-code-interview-javascript',
    owner_name: 'ryanheathers',
    owner_id: 992088,
    forks: 1,
    url: 'git://github.com/ryanheathers/cracking-code-interview-javascript.git',
    __v: 0 },
  { _id: 47432673,
    repo_name: 'react-chat-client',
    owner_name: 'ryanheathers',
    owner_id: 992088,
    forks: 1,
    url: 'git://github.com/ryanheathers/react-chat-client.git',
    __v: 0 },
  { _id: 136633027,
    repo_name: 'Miwok-android-app',
    owner_name: 'yukiej',
    owner_id: 16228294,
    forks: 0,
    url: 'git://github.com/yukiej/Miwok-android-app.git',
    __v: 0 },
  { _id: 150762785,
    repo_name: 'recursion-prompts',
    owner_name: 'yukiej',
    owner_id: 16228294,
    forks: 0,
    url: 'git://github.com/yukiej/recursion-prompts.git',
    __v: 0 },
  { _id: 6523466,
    repo_name: 'abxy',
    owner_name: 'xymostech',
    owner_id: 217900,
    forks: 0,
    url: 'git://github.com/xymostech/abxy.git',
    __v: 0 } ]

    }

  }

  componentDidMount() {
    let url = 'http://localhost:1128/repos';

    let request = $.ajax({
      url: url,
      method: 'GET',
    });

    request.done(function(msg) {
      console.log("On load received ", msg);
      this.setState({repos: msg});
    }.bind(this));

    request.fail(function(textStatus) {
      console.log(`Request failed: ${textStatus}`);
    })

    console.log(`I got some data!`);
  }

  search (term) {
    let url = 'http://localhost:1128/repos';

    let request = $.ajax({
      url: url,
      method: 'POST',
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