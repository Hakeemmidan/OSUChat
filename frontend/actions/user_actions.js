export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_UPDATE_USERNAME = 'RECEIVE_UPDATE_USERNAME';
import * as UserAPIUtil from '../util/user_api_util';

export const receiveUpdateUsername = (confirmationMsg) => ({
  type: RECEIVE_UPDATE_USERNAME,
  confirmationMsg
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUsername = (username) => dispatch => (
  UserAPIUtil.updateUsername(username).then((confirmationMsg) => (
    dispatch(receiveUpdateUsername(confirmationMsg))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);