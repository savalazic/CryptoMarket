import qs from 'qs';
import api from '../api';

const CLIENT_ID = '844b0a54-c0af-11e7-abc4-cec278b6b50a';

const login = (email, password) => {
  const data = {
    grant_type: 'password',
    client_id: CLIENT_ID,
    username: email,
    password,
  };

  return api
    .post('oauth/token/', qs.stringify(data))
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export default {
  login,
};
