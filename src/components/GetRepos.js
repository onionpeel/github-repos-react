import React from 'react';

const GetRepos = ({repos, getRepos}) => (
  repos.length > 0
    &&
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <h3>{repo.name}</h3>
        </li>
      ))}
    </ul>
);

export default GetRepos;
