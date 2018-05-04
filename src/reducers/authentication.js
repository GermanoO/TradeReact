import {
  authConstants,
} from '../actions/authentication';

const userPayload = JSON.parse(sessionStorage.getItem(authConstants.USER_TOKEN));

const initialState = {
  pending: false,
  // checks if it already logged in with a user
  userLoggedIn: userPayload !== false,
  user: (userPayload ? userPayload.user || {} : {}),
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    // user auth
    case authConstants.LOGIN_USER_REQUEST:
      return {
        ...state,
        pending: true,
        userLoggedIn: false,
        user: {},
      };

    case authConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        userLoggedIn: true,
        user: (action.payload ? action.payload.user || {} : {})
      };

    case authConstants.LOGIN_USER_FAILURE:
      return {
        ...state,
        pending: false,
        userLoggedIn: false,
        user: {},
      };

    case authConstants.LOGOUT_USER:
      return {
        ...state,
        pending: false,
        userLoggedIn: false,
        user: {},
      };

    default:
      return state;
  }
}
