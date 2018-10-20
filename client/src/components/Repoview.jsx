import React from 'react';

const Repo = (props) => {
  let repo_name = props.data.repo_name;
  let username = props.data.owner_name;
  let forks = props.data.forks;
  let url = props.data.url;

  return (
    <li>
      <span><a href={url}>{repo_name}</a> by </span><span> {username} </span><span> ({forks} forks) </span>
    </li>
  )
}

export default Repo;