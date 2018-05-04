import { authConstants } from '../actions/authentication';

export function authHeader() {
  const data = JSON.parse(sessionStorage.getItem(authConstants.USER_TOKEN));
  if (data && data.token) {
    return { Authorization: `Bearer ${data.token}` };
  }
  return {};
}
