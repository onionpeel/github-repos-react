import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import RepoList from './RepoList';

const Repos = () => {
  const [repos, setRepos] = useState('');

  const getRepos = async () => {
    let user = 'onionpeel'
    let repos = await axios.get(`https://api.github.com/users/${user}/repos`);
    setRepos(repos.data);
  };

  return (
    <div>
      <Button onClick={getRepos}>Get repos</Button>

      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default Repos;
