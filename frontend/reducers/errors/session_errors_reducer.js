import { RECEIVE_ERRORS } from '../../actions/session_actions';

export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const noErrors = [];

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return noErrors;
  }
};