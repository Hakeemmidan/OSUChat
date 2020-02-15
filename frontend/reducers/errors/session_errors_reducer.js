import { RECEIVE_ERRORS } from '../../actions/session_actions';

export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const noErrors = [];

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors ? action.errors : ['Something went wrong. Please contact Hakeemmidan@gmail.com for support'];
    default:
      return noErrors;
  }
};