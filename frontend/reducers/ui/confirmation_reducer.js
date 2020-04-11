import { SIGNUP_CURRENT_USER, RECEIVE_FORGOT_PASSWORD } from '../../actions/session_actions';
import { RECEIVE_UPDATE_USERNAME } from "../../actions/user_actions";
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

export const confirmationReducer = (state = {}, action) => {
  let oldState = Object.freeze(state);

  switch (action.type) {
    case SIGNUP_CURRENT_USER:
      return { signupConfirmation: action.confirmationMsg[0] }
    case RECEIVE_FORGOT_PASSWORD:
      return { forgotPasswordConfirmation: action.confirmationMsg[0] }
    case RECEIVE_UPDATE_USERNAME:
      return { updateUsernameConfirmation: action.confirmationMsg[0] }
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return oldState;
    default:
      return [];
  }
};