import React, {useState} from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import GetRepos from './GetRepos';

const Repos = () => {
  const [repos, setRepos] = useState('');
  const [query, setQuery] = useState('');

  const getRepos = async accountName => {
    let repos = await axios.get(`https://api.github.com/users/${accountName}/repos`);
    setRepos(repos.data);
  };

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    getRepos(query);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Find Github repos</Form.Label>
          <Form.Control type="name" placeholder="Github account name" value={query} onChange={handleOnChange}/>
        </Form.Group>
        <Button type="submit">Get repos</Button>
      </Form>

      <GetRepos repos={repos} getRepos={getRepos}/>
    </div>
  );
};

export default Repos;
