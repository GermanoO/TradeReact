import { authService } from '../services';

export const authConstants = {
  USER_TOKEN: 'USER_TOKEN',

  LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',

  LOGOUT_USER: 'LOGOUT_USER',
};

function loginUser(id, secret, endpoint) {
  return (dispatch) => {
    dispatch({ type: authConstants.LOGIN_USER_REQUEST, id });

    authService.login(id, secret, endpoint)
      .then(
        (payload) => {
          sessionStorage.setItem(authConstants.SET_USER_ID, JSON.stringify(payload));
          dispatch({ type: authConstants.LOGIN_USER_SUCCESS, payload });
        },
        (error) => {
          dispatch({ type: authConstants.LOGIN_USER_FAILURE, error });
        },
      );
  };
}

function logoutUser() {
  authService.userLogout();
  return {
    type: authConstants.LOGOUT_USER,
  };
}

export const authActions = {
  loginUser,
  logoutUser,
};
