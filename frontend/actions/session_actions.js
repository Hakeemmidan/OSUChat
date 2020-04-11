export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_CURRENT_USER = 'SIGNUP_CURRENT_USER';
export const RECEIVE_FORGOT_PASSWORD = 'RECEIVE_FORGOT_PASSWORD';
import * as SessionAPIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signupCurrentUser = (confirmationMsg) => ({
  type: SIGNUP_CURRENT_USER,
  confirmationMsg
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveForgotPassword = (confirmationMsg) => ({
  type: RECEIVE_FORGOT_PASSWORD,
  confirmationMsg
});

export const receiveSesssionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(confirmationMsg => (
    dispatch(signupCurrentUser(confirmationMsg))
  ), err => (
    dispatch(receiveSesssionErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSesssionErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const forgotPassword = (email) => dispatch => (
  SessionAPIUtil.forgotPassword(email).then((confirmationMsg) => (
    dispatch(receiveForgotPassword(confirmationMsg))
  ), err => (
    dispatch(receiveSesssionErrors(err.responseJSON))
  ))
);