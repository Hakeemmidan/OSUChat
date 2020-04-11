import { RECEIVE_USER_ERRORS } from '../../actions/user_actions';

export const userErrorsReducer = (_, action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors ? action.errors : ['Something went wrong. Please contact Hakeemmidan@gmail.com for support'];
    default:
      return [];
  }
};