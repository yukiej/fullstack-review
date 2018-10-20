import React from 'react';
import Repo from './Repoview.jsx';

// console.log(Repo);

const RepoList = (props) => {
  let repos = props.repos.map((repo) => {
    return (
      <Repo key={repo._id} data={repo}/>
    )      
  });

  return (
    <div>
      <h3> Top 25 most forked repos </h3>
      <h2>Repo Name, Username, Forks</h2>
      <ol>{repos}</ol>
    </div>
  )
}

export default RepoList;