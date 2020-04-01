import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

export const sessionErrorsReducer = (state = [], action) => {
  let oldState = Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors ? action.errors : ['Something went wrong. Please contact Hakeemmidan@gmail.com for support'];
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return oldState;
    default:
      return [];
  }
};