import {useState, useEffect} from 'react';
import {getFactory} from '../utils/api';

export type User = {
  login: 'kazuaki21';
  id: 35155361;
  node_id: 'MDQ6VXNlcjM1MTU1MzYx';
  avatar_url: 'https://avatars3.githubusercontent.com/u/35155361?v=4';
  gravatar_id: '';
  url: 'https://api.github.com/users/kazuaki21';
  html_url: 'https://github.com/kazuaki21';
  followers_url: 'https://api.github.com/users/kazuaki21/followers';
  following_url: 'https://api.github.com/users/kazuaki21/following{/other_user}';
  gists_url: 'https://api.github.com/users/kazuaki21/gists{/gist_id}';
  starred_url: 'https://api.github.com/users/kazuaki21/starred{/owner}{/repo}';
  subscriptions_url: 'https://api.github.com/users/kazuaki21/subscriptions';
  organizations_url: 'https://api.github.com/users/kazuaki21/orgs';
  repos_url: 'https://api.github.com/users/kazuaki21/repos';
  events_url: 'https://api.github.com/users/kazuaki21/events{/privacy}';
  received_events_url: 'https://api.github.com/users/kazuaki21/received_events';
  name: 'kazuaki21';
  company: null;
  blog: '';
  location: 'Tokyo, Japan';
  email: null;
  hireable: null;
  bio: null;
  public_repos: 7;
  public_gists: 0;
  followers: 0;
  following: 3;
  created_at: '2018-01-06T00:12:52Z';
  updated_at: '2020-04-07T11:26:01Z';
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const get = getFactory();

    const user = await get({}, '/users/kazuaki21');

    console.log(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return {user};
};
