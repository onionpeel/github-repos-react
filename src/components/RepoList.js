import React from 'react';

const RepoList = ({repos}) => (
  <ul>
    {repos.map(repo => (
      <li key={repo.id}>
        <h3>{repo.name}</h3>
      </li>
    ))}
  </ul>
);

export default RepoList;
