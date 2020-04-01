export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_UPDATE_USERNAME = 'RECEIVE_UPDATE_USERNAME';
import { RECEIVE_CURRENT_USER } from './session_actions';
import * as UserAPIUtil from '../util/user_api_util';

export const receiveUpdateUsername = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const updateUsernameConfirmation = () => ({
  type: RECEIVE_UPDATE_USERNAME,
  confirmationMsg: ["Username successfully updated!"]
})

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUsername = (id, username) => dispatch => (
  UserAPIUtil.updateUsername(id, username)
  .then(
    user => {
      dispatch(receiveUpdateUsername(user));
      dispatch(updateUsernameConfirmation());
  }, err => {
      dispatch(receiveUserErrors(err.responseJSON))
  })
);