import { authHeader } from '../helpers';
import { authConstants } from '../actions/authentication';

function userLogin(id, secret, endpoint) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, secret }),
  };

  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    });
}

function userLogout() {
  sessionStorage.removeItem(authConstants.USER_TOKEN);
}

export const authService = {
  userLogin,
  userLogout,
};
