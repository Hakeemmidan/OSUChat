import { RECEIVE_ERRORS } from '../../actions/session_actions';

export const sessionErrorsReducer = (state = [], action) => {
  let oldState = Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors ? action.errors : ['Something went wrong. Please contact Hakeemmidan@gmail.com for support'];
    default:
      return oldState;
  }
};